var mOdeViewer;

function odeViewer(pParentDiv){
	var pThis = this;
	this.parentDiv = pParentDiv;
	this.pieceSelectionPanel = $("<div id='OVpieceSelect'></div>");
	this.viewSelectionPanel = $("<div id='OVviewSelect'></div>");
	this.viewPanel = $("<canvas id='OVview'></canvas>")
	this.currentPiece = 0;
	this.currentView = 0;
	this.pieceData = new Array();
	
	this.start = function(){
		this.parentDiv.html("");
		this.loadPieceData();
		this.populatePieceSelectionPanel();
		this.populateViewSelectionPanel();
		this.parentDiv.append(this.pieceSelectionPanel);
		this.parentDiv.append(this.viewPanel);
		this.parentDiv.append(this.viewSelectionPanel);
	}
	
	this.loadPieceData = function(){
		this.pieceData = [{},{},{}]
	};
	
	this.populatePieceSelectionPanel = function(){
		this.pieceSelectionPanel.html("");
		this.pieceSelectionPanel.append($("<button class='leftArrow' onclick='mOdeViewer.pieceSelectorGoLeft()'> <</button>"));
		this.pieceSelectionPanel.append($("<button class='rightArrow' onclick='mOdeViewer.pieceSelectorGoRight()'>> </button>"));
		var pieceNumberToShow = Math.min(5,this.pieceData.length);
		var boxArray = Array();
		for (var i = 0; i<5 ; i++){
			this.pieceSelectionPanel.append($("<div class='pieceSelectionBox'></div>"));
		}
	};
	
	this.populateViewSelectionPanel= function(){
		
	};
	
	this.pieceSelectorGoRight = function(){;};
	this.pieceSelectorGoLeft = function(){;};
};

function startOdeViewer(){
	mOdeViewer = new odeViewer($("#viewerContainer"));
	mOdeViewer.start();
	};