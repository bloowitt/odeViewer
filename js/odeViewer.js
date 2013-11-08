var mOdeViewer;

function odeViewer(){
	var pThis = this;
	this.parentDiv = "";// = $("#viewerContainer");
	this.pieceSelectionPanel = "";// = $("#OVpieceSelect");
	this.viewSelectionPanel = "";// = $("#OVviewSelect");
	this.viewPanel= "";// = $("#OVview")
	this.currentPiece = 0;
	this.currentView = 0;
	this.pieceData = new Array();
	
	this.start = function(){
		this.parentDiv = $("#viewerContainer");
		this.pieceSelectionPanel = $("#OVpieceSelect");
		this.pieceSelectionPanel.html("HELLO");
		this.viewSelectionPanel = $("#OVviewSelect");
		this.viewPanel = $("#OVview")
		this.populatePieceSelectionPanel();
		this.populateViewSelectionPanel();
		this.restart3DView();
	}
	
	this.addPiece = function(piece){
		this.pieceData.push(piece);
	};
	
	/*this.emptyPieces = function(){
		this.pieceData = new Array();
	};^*/
	
	this.populatePieceSelectionPanel = function(){
		this.pieceSelectionPanel.html("");
		this.pieceSelectionPanel.append($("<button class='leftArrow' onclick='mOdeViewer.changeCurPiece("
		+ (this.currentPiece-1+this.pieceData.length)%this.pieceData.length + ")'> <</button>"));
		this.pieceSelectionPanel.append($("<button class='rightArrow' onclick='mOdeViewer.changeCurPiece("
		+ (this.currentPiece+1+this.pieceData.length)%this.pieceData.length +")'>> </button>"));
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
		this.viewSelectionPanel.append($("<button class='viewSelect' onclick='switchToIsoView()' > Isometrikoa</button>"));
		this.viewSelectionPanel.append($("<button class='viewSelect' onclick='switchToYView(true)' >Oinplanoa</button>"));
		this.viewSelectionPanel.append($("<button class='viewSelect' onclick='switchToXView(true)' >Altzaera</button>"));
		this.viewSelectionPanel.append($("<button class='viewSelect' onclick='switchToZView(true)' >Eskuineko profila</button>"));
		this.viewSelectionPanel.append($("<button class='viewSelect' onclick='switchToZView(false)' >Eskumako profila</button>"));
	};
	
	this.changeCurPiece = function(id){
		this.currentPiece = id;
		
		this.populatePieceSelectionPanel();
		changeObject(this.pieceData[this.currentPiece].colladaXml)
	};
	
	this.restart3DView = function(){
		//mRenderManager.loadPiece(this.pieceData[this.currentPiece].colladaXml);
	};
};

mOdeViewer = new odeViewer();

function startOdeViewer(){
	
	mOdeViewer.start();
};