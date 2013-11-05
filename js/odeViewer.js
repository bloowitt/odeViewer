var mOdeViewer;

function odeViewer(){
	var pThis = this;
	this.parentDiv = "";
	this.pieceSelectionPanel = $("<div id='OVpieceSelect'></div>");
	this.viewSelectionPanel = $("<div id='OVviewSelect'></div>");
	this.viewPanel = $("<canvas id='OVview'></canvas>")
	this.currentPiece = 0;
	this.currentView = 0;
	this.pieceData = new Array();
	
	this.start = function(pParentDiv){
		this.parentDiv = pParentDiv;
		this.parentDiv.html("");
		this.populatePieceSelectionPanel();
		this.populateViewSelectionPanel();
		this.parentDiv.append(this.pieceSelectionPanel);
		this.parentDiv.append(this.viewPanel);
		this.parentDiv.append(this.viewSelectionPanel);
		this.restart3DView();
	}
	
	this.addPiece = function(piece){
		this.pieceData.push(piece);
	};
	
	this.emptyPieces = function(){
		this.pieceData = new Array();
	};
	
	this.populatePieceSelectionPanel = function(){
		this.pieceSelectionPanel.html("");
		this.pieceSelectionPanel.append($("<button class='leftArrow' onclick='mOdeViewer.changeCurPiece(-1)'> <</button>"));
		this.pieceSelectionPanel.append($("<button class='rightArrow' onclick='mOdeViewer.changeCurPiece(+1)'>> </button>"));
		for (var i = -2; i<3 ; i++){
		var boxArray = Array();
			var myData = this.currentPiece+i ;
			var boxId = 'pieceSelectionBox' + i;
			this.pieceSelectionPanel.append($("<a class='pieceSelectionBox' id=" 
			+ boxId + "onclick='mOdeViewer.changeCurPiece(" + i +")' >" + myData
			+ "</a>"));
			
		}
			
	};
	
	this.populateViewSelectionPanel= function(){
		
	};
	
	this.changeCurPiece = function(howMuch){
		this.currentPiece = (this.currentPiece + howMuch)
		% this.pieceData.length;
		if (this.currentPiece < 0)
			this.currentPiece = this.pieceData.length + this.currentPiece;
		
		this.populatePieceSelectionPanel();
		
	};
	
	this.restart3DView() = {
		
	};
};

mOdeViewer = new odeViewer();

function startOdeViewer(container){
	
	mOdeViewer.start(container);
};