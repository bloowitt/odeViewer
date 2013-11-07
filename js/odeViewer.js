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
			var myData = (this.pieceData.length+this.currentPiece+i) % this.pieceData.length ;
			var boxId = 'pieceSelectionBox' + i;
			this.pieceSelectionPanel.append($("<a class='pieceSelectionBox' id=" 
			+ boxId + " onclick='mOdeViewer.changeCurPiece(" + myData +")' >" 
			+ "<img class='pieceSelectorBackground' src='" 
			+ this.pieceData[myData].previewImg 
			+"'/>" + "<span class='pieceSelectorText'>"
			+ myData + "</span>" 		
			+ "</a>" + myData));
			
		}
			
	};
	
	this.populateViewSelectionPanel= function(){
		this.viewSelectionPanel.html("");
		this.viewSelectionPanel.append("Pulsa las teclas del 1 al 4 para elegir vista. Rota la vista libremente con el ratón");
	};
	
	this.changeCurPiece = function(id){
		this.currentPiece = id;
		
		this.populatePieceSelectionPanel();
		
	};
	
	this.restart3DView = function(){
		
	};
};

mOdeViewer = new odeViewer();

function startOdeViewer(container){
	
	mOdeViewer.start(container);
};