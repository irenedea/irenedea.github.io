(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'symbolic'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'symbolic'.");
    }
    root.symbolic = factory(typeof symbolic === 'undefined' ? {} : symbolic, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var equals = Kotlin.equals;
  var unboxChar = Kotlin.unboxChar;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var Exception = Kotlin.kotlin.Exception;
  var Unit = Kotlin.kotlin.Unit;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var hashCode = Kotlin.hashCode;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var contentDeepHashCode = Kotlin.arrayDeepHashCode;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var getCallableRef = Kotlin.getCallableRef;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var intersect = Kotlin.kotlin.collections.intersect_q4559j$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var Math_0 = Math;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  TokenType.prototype = Object.create(Enum.prototype);
  TokenType.prototype.constructor = TokenType;
  Token$CONST.prototype = Object.create(Token.prototype);
  Token$CONST.prototype.constructor = Token$CONST;
  Token$VAR.prototype = Object.create(Token.prototype);
  Token$VAR.prototype.constructor = Token$VAR;
  Token$LPAR.prototype = Object.create(Token.prototype);
  Token$LPAR.prototype.constructor = Token$LPAR;
  Token$RPAR.prototype = Object.create(Token.prototype);
  Token$RPAR.prototype.constructor = Token$RPAR;
  Token$EOF.prototype = Object.create(Token.prototype);
  Token$EOF.prototype.constructor = Token$EOF;
  Token$OP.prototype = Object.create(Token.prototype);
  Token$OP.prototype.constructor = Token$OP;
  Token$OP$ADD.prototype = Object.create(Token$OP.prototype);
  Token$OP$ADD.prototype.constructor = Token$OP$ADD;
  Token$OP$SUB.prototype = Object.create(Token$OP.prototype);
  Token$OP$SUB.prototype.constructor = Token$OP$SUB;
  Token$OP$MUL.prototype = Object.create(Token$OP.prototype);
  Token$OP$MUL.prototype.constructor = Token$OP$MUL;
  Token$OP$DIV.prototype = Object.create(Token$OP.prototype);
  Token$OP$DIV.prototype.constructor = Token$OP$DIV;
  Additive.prototype = Object.create(Op.prototype);
  Additive.prototype.constructor = Additive;
  Multiplicative.prototype = Object.create(Op.prototype);
  Multiplicative.prototype.constructor = Multiplicative;
  Add.prototype = Object.create(Additive.prototype);
  Add.prototype.constructor = Add;
  Sub.prototype = Object.create(Additive.prototype);
  Sub.prototype.constructor = Sub;
  Div.prototype = Object.create(Multiplicative.prototype);
  Div.prototype.constructor = Div;
  Mul.prototype = Object.create(Multiplicative.prototype);
  Mul.prototype.constructor = Mul;
  Unary.prototype = Object.create(Op.prototype);
  Unary.prototype.constructor = Unary;
  Negate.prototype = Object.create(Unary.prototype);
  Negate.prototype.constructor = Negate;
  UnaryCall.prototype = Object.create(ASTNode.prototype);
  UnaryCall.prototype.constructor = UnaryCall;
  Call.prototype = Object.create(ASTNode.prototype);
  Call.prototype.constructor = Call;
  FlatCall.prototype = Object.create(ASTNode.prototype);
  FlatCall.prototype.constructor = FlatCall;
  Var.prototype = Object.create(ASTNode.prototype);
  Var.prototype.constructor = Var;
  Const.prototype = Object.create(ASTNode.prototype);
  Const.prototype.constructor = Const;
  function TokenType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TokenType_initFields() {
    TokenType_initFields = function () {
    };
    TokenType$CONST_instance = new TokenType('CONST', 0);
    TokenType$VAR_instance = new TokenType('VAR', 1);
    TokenType$MINUS_instance = new TokenType('MINUS', 2);
    TokenType$PLUS_instance = new TokenType('PLUS', 3);
    TokenType$TIMES_instance = new TokenType('TIMES', 4);
    TokenType$DIV_instance = new TokenType('DIV', 5);
    TokenType$RPAR_instance = new TokenType('RPAR', 6);
    TokenType$LPAR_instance = new TokenType('LPAR', 7);
    TokenType$EOF_instance = new TokenType('EOF', 8);
  }
  var TokenType$CONST_instance;
  function TokenType$CONST_getInstance() {
    TokenType_initFields();
    return TokenType$CONST_instance;
  }
  var TokenType$VAR_instance;
  function TokenType$VAR_getInstance() {
    TokenType_initFields();
    return TokenType$VAR_instance;
  }
  var TokenType$MINUS_instance;
  function TokenType$MINUS_getInstance() {
    TokenType_initFields();
    return TokenType$MINUS_instance;
  }
  var TokenType$PLUS_instance;
  function TokenType$PLUS_getInstance() {
    TokenType_initFields();
    return TokenType$PLUS_instance;
  }
  var TokenType$TIMES_instance;
  function TokenType$TIMES_getInstance() {
    TokenType_initFields();
    return TokenType$TIMES_instance;
  }
  var TokenType$DIV_instance;
  function TokenType$DIV_getInstance() {
    TokenType_initFields();
    return TokenType$DIV_instance;
  }
  var TokenType$RPAR_instance;
  function TokenType$RPAR_getInstance() {
    TokenType_initFields();
    return TokenType$RPAR_instance;
  }
  var TokenType$LPAR_instance;
  function TokenType$LPAR_getInstance() {
    TokenType_initFields();
    return TokenType$LPAR_instance;
  }
  var TokenType$EOF_instance;
  function TokenType$EOF_getInstance() {
    TokenType_initFields();
    return TokenType$EOF_instance;
  }
  TokenType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenType',
    interfaces: [Enum]
  };
  function TokenType$values() {
    return [TokenType$CONST_getInstance(), TokenType$VAR_getInstance(), TokenType$MINUS_getInstance(), TokenType$PLUS_getInstance(), TokenType$TIMES_getInstance(), TokenType$DIV_getInstance(), TokenType$RPAR_getInstance(), TokenType$LPAR_getInstance(), TokenType$EOF_getInstance()];
  }
  TokenType.values = TokenType$values;
  function TokenType$valueOf(name) {
    switch (name) {
      case 'CONST':
        return TokenType$CONST_getInstance();
      case 'VAR':
        return TokenType$VAR_getInstance();
      case 'MINUS':
        return TokenType$MINUS_getInstance();
      case 'PLUS':
        return TokenType$PLUS_getInstance();
      case 'TIMES':
        return TokenType$TIMES_getInstance();
      case 'DIV':
        return TokenType$DIV_getInstance();
      case 'RPAR':
        return TokenType$RPAR_getInstance();
      case 'LPAR':
        return TokenType$LPAR_getInstance();
      case 'EOF':
        return TokenType$EOF_getInstance();
      default:throwISE('No enum constant symbolic.TokenType.' + name);
    }
  }
  TokenType.valueOf_61zpoe$ = TokenType$valueOf;
  function Token(name, type) {
    Token$Companion_getInstance();
    this.name = name;
    this.type = type;
  }
  function Token$CONST(value) {
    Token.call(this, value.toString(), TokenType$CONST_getInstance());
  }
  Token$CONST.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CONST',
    interfaces: [Token]
  };
  function Token$VAR(name) {
    Token.call(this, name, TokenType$VAR_getInstance());
  }
  Token$VAR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VAR',
    interfaces: [Token]
  };
  function Token$LPAR() {
    Token$LPAR_instance = this;
    Token.call(this, '(', TokenType$LPAR_getInstance());
  }
  Token$LPAR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LPAR',
    interfaces: [Token]
  };
  var Token$LPAR_instance = null;
  function Token$LPAR_getInstance() {
    if (Token$LPAR_instance === null) {
      new Token$LPAR();
    }
    return Token$LPAR_instance;
  }
  function Token$RPAR() {
    Token$RPAR_instance = this;
    Token.call(this, ')', TokenType$RPAR_getInstance());
  }
  Token$RPAR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RPAR',
    interfaces: [Token]
  };
  var Token$RPAR_instance = null;
  function Token$RPAR_getInstance() {
    if (Token$RPAR_instance === null) {
      new Token$RPAR();
    }
    return Token$RPAR_instance;
  }
  function Token$EOF() {
    Token$EOF_instance = this;
    Token.call(this, 'EOF', TokenType$EOF_getInstance());
  }
  Token$EOF.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EOF',
    interfaces: [Token]
  };
  var Token$EOF_instance = null;
  function Token$EOF_getInstance() {
    if (Token$EOF_instance === null) {
      new Token$EOF();
    }
    return Token$EOF_instance;
  }
  function Token$OP(name, type) {
    Token.call(this, name, type);
  }
  function Token$OP$ADD() {
    Token$OP$ADD_instance = this;
    Token$OP.call(this, '+', TokenType$PLUS_getInstance());
  }
  Token$OP$ADD.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ADD',
    interfaces: [Token$OP]
  };
  var Token$OP$ADD_instance = null;
  function Token$OP$ADD_getInstance() {
    if (Token$OP$ADD_instance === null) {
      new Token$OP$ADD();
    }
    return Token$OP$ADD_instance;
  }
  function Token$OP$SUB() {
    Token$OP$SUB_instance = this;
    Token$OP.call(this, '-', TokenType$MINUS_getInstance());
  }
  Token$OP$SUB.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SUB',
    interfaces: [Token$OP]
  };
  var Token$OP$SUB_instance = null;
  function Token$OP$SUB_getInstance() {
    if (Token$OP$SUB_instance === null) {
      new Token$OP$SUB();
    }
    return Token$OP$SUB_instance;
  }
  function Token$OP$MUL() {
    Token$OP$MUL_instance = this;
    Token$OP.call(this, '*', TokenType$TIMES_getInstance());
  }
  Token$OP$MUL.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MUL',
    interfaces: [Token$OP]
  };
  var Token$OP$MUL_instance = null;
  function Token$OP$MUL_getInstance() {
    if (Token$OP$MUL_instance === null) {
      new Token$OP$MUL();
    }
    return Token$OP$MUL_instance;
  }
  function Token$OP$DIV() {
    Token$OP$DIV_instance = this;
    Token$OP.call(this, '/', TokenType$DIV_getInstance());
  }
  Token$OP$DIV.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DIV',
    interfaces: [Token$OP]
  };
  var Token$OP$DIV_instance = null;
  function Token$OP$DIV_getInstance() {
    if (Token$OP$DIV_instance === null) {
      new Token$OP$DIV();
    }
    return Token$OP$DIV_instance;
  }
  Token$OP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OP',
    interfaces: [Token]
  };
  Token.prototype.toString = function () {
    return this.name;
  };
  function Token$Companion() {
    Token$Companion_instance = this;
  }
  Token$Companion.prototype.fromString_61zpoe$ = function (str) {
    switch (str) {
      case '+':
        return Token$OP$ADD_getInstance();
      case '-':
        return Token$OP$SUB_getInstance();
      case '*':
        return Token$OP$MUL_getInstance();
      case '/':
        return Token$OP$DIV_getInstance();
      case '(':
        return Token$LPAR_getInstance();
      case ')':
        return Token$RPAR_getInstance();
      default:var maybeInt = toIntOrNull(str);
        return maybeInt != null ? new Token$CONST(maybeInt) : new Token$VAR(str);
    }
  };
  Token$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Token$Companion_instance = null;
  function Token$Companion_getInstance() {
    if (Token$Companion_instance === null) {
      new Token$Companion();
    }
    return Token$Companion_instance;
  }
  Token.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Token',
    interfaces: []
  };
  function isOpOrParens($receiver) {
    switch ($receiver) {
      case 43:
      case 45:
      case 42:
      case 47:
      case 40:
      case 41:
        return true;
      default:return false;
    }
  }
  function Tokens() {
    this.tokens_0 = null;
    this.length_0 = 0;
    this.index_0 = 0;
  }
  Tokens.prototype.tokenize_0 = function (str) {
    var tmp$;
    var noSpaces = replace(str, ' ', '');
    var strings = ArrayList_init();
    var curr = '';
    tmp$ = iterator(noSpaces);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      if (isOpOrParens(c)) {
        if (!equals(curr, '')) {
          strings.add_11rb$(curr);
          curr = '';
        }
        strings.add_11rb$(String.fromCharCode(c));
      }
       else {
        curr += String.fromCharCode(c);
      }
    }
    if (!equals(curr, ''))
      strings.add_11rb$(curr);
    var destination = ArrayList_init_0(collectionSizeOrDefault(strings, 10));
    var tmp$_0;
    tmp$_0 = strings.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(Token$Companion_getInstance().fromString_61zpoe$(item));
    }
    return destination;
  };
  Tokens.prototype.advance = function () {
    if (!this.canAdvance())
      throw IllegalStateException_init('Cannot advance to next token for ' + this.tokens_0 + '.');
    var $receiver = this.tokens_0.get_za3lpa$(this.index_0);
    this.index_0 = this.index_0 + 1 | 0;
    return $receiver;
  };
  Tokens.prototype.canAdvance = function () {
    return this.index_0 < (this.length_0 - 1 | 0);
  };
  Tokens.prototype.at_vf8yvd$ = function (type) {
    if (this.index_0 > (this.length_0 - 1 | 0))
      throw new IndexOutOfBoundsException('Not at valid token index for tokens of length ' + this.length_0 + ' and index ' + this.index_0 + '.');
    return this.tokens_0.get_za3lpa$(this.index_0).type === type;
  };
  Tokens.prototype.nextAt_vf8yvd$ = function (type) {
    if ((this.index_0 + 1 | 0) < this.length_0)
      return false;
    return this.tokens_0.get_za3lpa$(this.index_0 + 1 | 0).type === type;
  };
  Tokens.prototype.advancePastParensExpression = function () {
    var startIndex = this.index_0;
    var balance = -1;
    this.advance();
    while (this.canAdvance() && balance !== 0) {
      if (this.at_vf8yvd$(TokenType$LPAR_getInstance()))
        balance = balance - 1 | 0;
      else if (this.at_vf8yvd$(TokenType$RPAR_getInstance()))
        balance = balance + 1 | 0;
      this.advance();
    }
    return Tokens_init_0(this.tokens_0.subList_vux9f0$(startIndex + 1 | 0, this.index_0 - 1 | 0));
  };
  Tokens.prototype.toString = function () {
    return this.tokens_0.toString();
  };
  Tokens.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tokens',
    interfaces: []
  };
  function Tokens_init(input, $this) {
    $this = $this || Object.create(Tokens.prototype);
    Tokens.call($this);
    $this.tokens_0 = plus($this.tokenize_0(input), listOf(Token$EOF_getInstance()));
    $this.length_0 = $this.tokens_0.size;
    return $this;
  }
  function Tokens_init_0(_tokens, $this) {
    $this = $this || Object.create(Tokens.prototype);
    Tokens.call($this);
    $this.tokens_0 = plus(_tokens, !equals(last(_tokens), Token$EOF_getInstance()) ? listOf(Token$EOF_getInstance()) : emptyList());
    $this.length_0 = $this.tokens_0.size;
    return $this;
  }
  function Lexer() {
    Lexer_instance = this;
  }
  Lexer.prototype.tokenize_61zpoe$ = function (input) {
    return Tokens_init(input);
  };
  Lexer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Lexer',
    interfaces: []
  };
  var Lexer_instance = null;
  function Lexer_getInstance() {
    if (Lexer_instance === null) {
      new Lexer();
    }
    return Lexer_instance;
  }
  function runPasses(ast, passes, debug) {
    if (debug === void 0)
      debug = false;
    var tmp$;
    var accumulator = ast;
    for (tmp$ = 0; tmp$ !== passes.length; ++tmp$) {
      var element = passes[tmp$];
      var newAST = element.run_qaijlk$(accumulator);
      if (debug)
        println(element.name + ' =>' + '\t' + newAST);
      accumulator = newAST;
    }
    return accumulator;
  }
  function normalize(input) {
    var tokens = Lexer_getInstance().tokenize_61zpoe$(input);
    var ast = Parser$Companion_getInstance().parse_mc2c8m$(tokens);
    println('=> ' + ast);
    return runPasses(ast, [ExpandSub_getInstance(), ExpandConst_getInstance(), ExpandUnary_getInstance(), Distributive_getInstance(), CleanNegOnes_getInstance(), CleanZerosOnes_getInstance(), NegOnesToUnary_getInstance(), ReduceAddNegates_getInstance(), Normalize_getInstance()], true);
  }
  function main$lambda(it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var input1 = Kotlin.isType(tmp$ = document.getElementById('input1'), HTMLInputElement) ? tmp$ : throwCCE();
    var input2 = Kotlin.isType(tmp$_0 = document.getElementById('input2'), HTMLInputElement) ? tmp$_0 : throwCCE();
    try {
      tmp$_2 = ((tmp$_1 = normalize(input1.value)) != null ? tmp$_1.equals(normalize(input2.value)) : null) ? 'EQUAL!' : 'UNEQUAL!';
    }
     catch (_) {
      if (Kotlin.isType(_, Exception)) {
        tmp$_2 = 'Error :(';
      }
       else
        throw _;
    }
    var output = tmp$_2;
    (Kotlin.isType(tmp$_3 = document.getElementById('output'), HTMLParagraphElement) ? tmp$_3 : throwCCE()).innerText = output;
    return Unit;
  }
  function main() {
    var tmp$;
    var button = Kotlin.isType(tmp$ = document.getElementById('mybutton'), HTMLButtonElement) ? tmp$ : throwCCE();
    button.addEventListener('click', main$lambda);
  }
  function Op(str) {
    Op$Companion_getInstance();
    this.str = str;
  }
  Op.prototype.toString = function () {
    return this.str;
  };
  function Op$Companion() {
    Op$Companion_instance = this;
  }
  Op$Companion.prototype.fromToken_nmt95p$ = function (token) {
    if (equals(token, Token$OP$ADD_getInstance()))
      return Add_getInstance();
    else if (equals(token, Token$OP$SUB_getInstance()))
      return Sub_getInstance();
    else if (equals(token, Token$OP$MUL_getInstance()))
      return Mul_getInstance();
    else if (equals(token, Token$OP$DIV_getInstance()))
      return Div_getInstance();
    else
      throw IllegalArgumentException_init('Token ' + token + ' is not Op');
  };
  Op$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Op$Companion_instance = null;
  function Op$Companion_getInstance() {
    if (Op$Companion_instance === null) {
      new Op$Companion();
    }
    return Op$Companion_instance;
  }
  Op.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Op',
    interfaces: []
  };
  function Additive(str) {
    Op.call(this, str);
  }
  Additive.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Additive',
    interfaces: [Op]
  };
  function Multiplicative(str) {
    Op.call(this, str);
  }
  Multiplicative.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Multiplicative',
    interfaces: [Op]
  };
  function Add() {
    Add_instance = this;
    Additive.call(this, '+');
  }
  Add.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Add',
    interfaces: [Additive]
  };
  var Add_instance = null;
  function Add_getInstance() {
    if (Add_instance === null) {
      new Add();
    }
    return Add_instance;
  }
  function Sub() {
    Sub_instance = this;
    Additive.call(this, '-');
  }
  Sub.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Sub',
    interfaces: [Additive]
  };
  var Sub_instance = null;
  function Sub_getInstance() {
    if (Sub_instance === null) {
      new Sub();
    }
    return Sub_instance;
  }
  function Div() {
    Div_instance = this;
    Multiplicative.call(this, '/');
  }
  Div.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Div',
    interfaces: [Multiplicative]
  };
  var Div_instance = null;
  function Div_getInstance() {
    if (Div_instance === null) {
      new Div();
    }
    return Div_instance;
  }
  function Mul() {
    Mul_instance = this;
    Multiplicative.call(this, '*');
  }
  Mul.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Mul',
    interfaces: [Multiplicative]
  };
  var Mul_instance = null;
  function Mul_getInstance() {
    if (Mul_instance === null) {
      new Mul();
    }
    return Mul_instance;
  }
  function Unary(str) {
    Op.call(this, str);
  }
  Unary.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Unary',
    interfaces: [Op]
  };
  function Negate() {
    Negate_instance = this;
    Unary.call(this, '-');
  }
  Negate.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Negate',
    interfaces: [Unary]
  };
  var Negate_instance = null;
  function Negate_getInstance() {
    if (Negate_instance === null) {
      new Negate();
    }
    return Negate_instance;
  }
  function ASTNode() {
    ASTNode$Companion_getInstance();
  }
  ASTNode.prototype.equals = function (other) {
    var tmp$;
    if (other == null)
      return false;
    if ((tmp$ = Kotlin.getKClassFromExpression(other)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(this)) : null)
      return hashCode(this) === hashCode(other);
    return false;
  };
  function ASTNode$Companion() {
    ASTNode$Companion_instance = this;
  }
  ASTNode$Companion.prototype.constOrVarFromToken_nmt95p$ = function (token) {
    switch (token.type.name) {
      case 'CONST':
        return new Const(toInt(token.name));
      case 'VAR':
        return new Var(token.name);
      default:throw IllegalArgumentException_init('Token ' + token + ' is not Const or Var');
    }
  };
  ASTNode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ASTNode$Companion_instance = null;
  function ASTNode$Companion_getInstance() {
    if (ASTNode$Companion_instance === null) {
      new ASTNode$Companion();
    }
    return ASTNode$Companion_instance;
  }
  ASTNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ASTNode',
    interfaces: []
  };
  function UnaryCall(op, arg) {
    ASTNode.call(this);
    this.op = op;
    this.arg = arg;
  }
  UnaryCall.prototype.acceptDistributeLeft_a1zc15$ = function (newOp, expr) {
    return new UnaryCall(this.op, this.arg.acceptDistributeLeft_a1zc15$(newOp, expr));
  };
  UnaryCall.prototype.acceptDistributeRight_a1zc15$ = function (newOp, expr) {
    return new UnaryCall(this.op, this.arg.acceptDistributeRight_a1zc15$(newOp, expr));
  };
  UnaryCall.prototype.copy_a1zc15$ = function (op, arg) {
    if (op === void 0)
      op = this.op;
    if (arg === void 0)
      arg = this.arg;
    if (equals(op, this.op) && (arg != null ? arg.equals(this.arg) : null)) {
      return this;
    }
    return new UnaryCall(op, arg);
  };
  UnaryCall.prototype.toString = function () {
    return this.op.toString() + '(' + this.arg + ')';
  };
  UnaryCall.prototype.hashCode = function () {
    return contentDeepHashCode([Kotlin.getKClassFromExpression(this), this.op, this.arg]);
  };
  UnaryCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnaryCall',
    interfaces: [ASTNode]
  };
  function Call(op, left, right) {
    ASTNode.call(this);
    this.op = op;
    this.left = left;
    this.right = right;
  }
  Call.prototype.acceptDistributeLeft_a1zc15$ = function (newOp, expr) {
    if (Kotlin.isType(this.op, Additive))
      return new Call(this.op, this.left.acceptDistributeLeft_a1zc15$(newOp, expr), this.right.acceptDistributeLeft_a1zc15$(newOp, expr));
    else {
      var newExpr = new Call(this.op, expr, this.left);
      return this.right.acceptDistributeLeft_a1zc15$(newOp, newExpr);
    }
  };
  Call.prototype.acceptDistributeRight_a1zc15$ = function (newOp, expr) {
    if (Kotlin.isType(this.op, Additive))
      return new Call(this.op, this.left.acceptDistributeRight_a1zc15$(newOp, expr), this.right.acceptDistributeRight_a1zc15$(newOp, expr));
    else {
      var newExpr = new Call(this.op, this.right, expr);
      return this.left.acceptDistributeRight_a1zc15$(newOp, newExpr);
    }
  };
  Call.prototype.copy_9j33lp$ = function (op, left, right) {
    if (op === void 0)
      op = this.op;
    if (left === void 0)
      left = this.left;
    if (right === void 0)
      right = this.right;
    if (equals(op, this.op) && (left != null ? left.equals(this.left) : null) && (right != null ? right.equals(this.right) : null)) {
      return this;
    }
    return new Call(op, left, right);
  };
  Call.prototype.toString = function () {
    return '(' + this.left + ' ' + this.op + ' ' + this.right + ')';
  };
  Call.prototype.hashCode = function () {
    return contentDeepHashCode([Kotlin.getKClassFromExpression(this), this.op, this.left, this.right]);
  };
  Call.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Call',
    interfaces: [ASTNode]
  };
  function FlatCall(op, args) {
    ASTNode.call(this);
    this.op = op;
    this.args = args;
    if (this.args.size < 2)
      throw IllegalArgumentException_init_0();
  }
  FlatCall.prototype.acceptDistributeLeft_a1zc15$ = function (newOp, expr) {
    var tmp$ = this.op;
    var $receiver = this.args;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.acceptDistributeLeft_a1zc15$(this.op, expr));
    }
    return new FlatCall(tmp$, destination);
  };
  FlatCall.prototype.acceptDistributeRight_a1zc15$ = function (newOp, expr) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  FlatCall.prototype.toString = function () {
    return joinToString(this.args, ' ' + this.op + ' ');
  };
  FlatCall.prototype.copy_svci32$ = function (op, args) {
    if (op === void 0)
      op = this.op;
    if (args === void 0)
      args = this.args;
    if (equals(op, this.op) && equals(args, this.args)) {
      return this;
    }
    return new FlatCall(op, args);
  };
  FlatCall.prototype.hashCode = function () {
    return contentDeepHashCode([Kotlin.getKClassFromExpression(this), this.op, this.args]);
  };
  FlatCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlatCall',
    interfaces: [ASTNode]
  };
  function Var(name) {
    ASTNode.call(this);
    this.name = name;
  }
  Var.prototype.acceptDistributeLeft_a1zc15$ = function (newOp, expr) {
    return new Call(newOp, expr, this);
  };
  Var.prototype.acceptDistributeRight_a1zc15$ = function (newOp, expr) {
    return new Call(newOp, this, expr);
  };
  Var.prototype.toString = function () {
    return this.name;
  };
  Var.prototype.hashCode = function () {
    return hashCode(this.name);
  };
  Var.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Var',
    interfaces: [ASTNode]
  };
  function Const(value) {
    ASTNode.call(this);
    this.value = value;
  }
  Const.prototype.acceptDistributeLeft_a1zc15$ = function (newOp, expr) {
    return new Call(newOp, expr, this);
  };
  Const.prototype.acceptDistributeRight_a1zc15$ = function (newOp, expr) {
    return new Call(newOp, this, expr);
  };
  Const.prototype.toString = function () {
    return this.value.toString();
  };
  Const.prototype.hashCode = function () {
    return this.value;
  };
  Const.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Const',
    interfaces: [ASTNode]
  };
  function Parser(tokens) {
    Parser$Companion_getInstance();
    this.tokens = tokens;
  }
  Parser.prototype.nextAt_0 = function (type) {
    return this.tokens.nextAt_vf8yvd$(type);
  };
  Parser.prototype.at_0 = function (type) {
    return this.tokens.at_vf8yvd$(type);
  };
  Parser.prototype.advance_0 = function () {
    return this.tokens.advance();
  };
  Parser.prototype.canAdvance_0 = function () {
    return this.tokens.canAdvance();
  };
  Parser.prototype.advancePastParensExpression_0 = function () {
    return this.tokens.advancePastParensExpression();
  };
  Parser.prototype.parsePrimary = function () {
    if (this.at_0(TokenType$LPAR_getInstance())) {
      return (new Parser(this.advancePastParensExpression_0())).parse();
    }
    return ASTNode$Companion_getInstance().constOrVarFromToken_nmt95p$(this.tokens.advance());
  };
  Parser.prototype.parseUnary = function () {
    if (this.at_0(TokenType$MINUS_getInstance())) {
      this.advance_0();
      var op = Negate_getInstance();
      var arg = this.parsePrimary();
      return new UnaryCall(op, arg);
    }
    return this.parsePrimary();
  };
  Parser.prototype.parseMultiplicative = function () {
    var left = this.parseUnary();
    while (this.at_0(TokenType$TIMES_getInstance()) || this.at_0(TokenType$DIV_getInstance())) {
      var op = Op$Companion_getInstance().fromToken_nmt95p$(this.advance_0());
      var right = this.parseUnary();
      left = new Call(op, left, right);
    }
    return left;
  };
  Parser.prototype.parseAdditive = function () {
    var left = this.parseMultiplicative();
    while (this.at_0(TokenType$PLUS_getInstance()) || this.at_0(TokenType$MINUS_getInstance())) {
      var op = Op$Companion_getInstance().fromToken_nmt95p$(this.advance_0());
      var right = this.parseMultiplicative();
      left = new Call(op, left, right);
    }
    return left;
  };
  Parser.prototype.parse = function () {
    return this.parseAdditive();
  };
  function Parser$Companion() {
    Parser$Companion_instance = this;
  }
  Parser$Companion.prototype.parse_mc2c8m$ = function (tokens) {
    return (new Parser(tokens)).parse();
  };
  Parser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Parser$Companion_instance = null;
  function Parser$Companion_getInstance() {
    if (Parser$Companion_instance === null) {
      new Parser$Companion();
    }
    return Parser$Companion_instance;
  }
  Parser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parser',
    interfaces: []
  };
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Pass() {
  }
  Pass.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Pass',
    interfaces: []
  };
  function runUntilStable(ast, fn) {
    var prev = ast;
    var curr = fn(ast);
    var count = 0;
    while (hashCode(prev) !== hashCode(curr)) {
      count = count + 1 | 0;
      prev = curr;
      curr = fn(prev);
    }
    return curr;
  }
  function recurseHelper(ast, fn) {
    if (Kotlin.isType(ast, Call))
      return ast.copy_9j33lp$(void 0, fn(ast.left), fn(ast.right));
    else if (Kotlin.isType(ast, FlatCall)) {
      var tmp$ = void 0;
      var $receiver = ast.args;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(fn(item));
      }
      return ast.copy_svci32$(tmp$, destination);
    }
     else if (Kotlin.isType(ast, UnaryCall))
      return ast.copy_a1zc15$(void 0, fn(ast.arg));
    else if (Kotlin.isType(ast, Var) || Kotlin.isType(ast, Const))
      return ast;
    else
      return Kotlin.noWhenBranchMatched();
  }
  function Distributive() {
    Distributive_instance = this;
    this.name_nnohqp$_0 = 'Distributive';
  }
  Object.defineProperty(Distributive.prototype, 'name', {
    get: function () {
      return this.name_nnohqp$_0;
    }
  });
  Distributive.prototype.distributeRight_0 = function (ast) {
    if (Kotlin.isType(ast, Call))
      if (Kotlin.isType(ast.op, Multiplicative)) {
        return ast.left.acceptDistributeRight_a1zc15$(ast.op, ast.right);
      }
       else {
        return new Call(ast.op, this.distributeRight_0(ast.left), this.distributeRight_0(ast.right));
      }
     else
      return ast;
  };
  Distributive.prototype.distributeLeft_0 = function (ast) {
    if (Kotlin.isType(ast, Call))
      if (Kotlin.isType(ast.op, Multiplicative)) {
        return ast.right.acceptDistributeLeft_a1zc15$(ast.op, ast.left);
      }
       else {
        return new Call(ast.op, this.distributeLeft_0(ast.left), this.distributeLeft_0(ast.right));
      }
     else
      return ast;
  };
  function Distributive$run$lambda(this$Distributive) {
    return function (input) {
      var distributed = this$Distributive.distributeLeft_0(this$Distributive.distributeRight_0(input));
      return Normalize_getInstance().run_qaijlk$(distributed);
    };
  }
  Distributive.prototype.run_qaijlk$ = function (ast) {
    return runUntilStable(ast, Distributive$run$lambda(this));
  };
  Distributive.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Distributive',
    interfaces: [Pass]
  };
  var Distributive_instance = null;
  function Distributive_getInstance() {
    if (Distributive_instance === null) {
      new Distributive();
    }
    return Distributive_instance;
  }
  function Flatten() {
    Flatten_instance = this;
    this.name_ode6k7$_0 = 'Flatten';
  }
  Object.defineProperty(Flatten.prototype, 'name', {
    get: function () {
      return this.name_ode6k7$_0;
    }
  });
  Flatten.prototype.flattenCallArgs_tjja1z$ = function (ast, op) {
    if (Kotlin.isType(ast, Call))
      return equals(op, ast.op) ? plus(this.flattenCallArgs_tjja1z$(ast.left, op), this.flattenCallArgs_tjja1z$(ast.right, op)) : listOf(this.flatten_0(ast));
    else
      return listOf(ast);
  };
  Flatten.prototype.flatten_0 = function (ast) {
    if (Kotlin.isType(ast, Call))
      return new FlatCall(ast.op, this.flattenCallArgs_tjja1z$(ast, ast.op));
    else
      return ast;
  };
  function Flatten$run$lambda(this$Flatten) {
    return function (it) {
      return this$Flatten.flatten_0(it);
    };
  }
  Flatten.prototype.run_qaijlk$ = function (ast) {
    return runUntilStable(ast, Flatten$run$lambda(this));
  };
  Flatten.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Flatten',
    interfaces: [Pass]
  };
  var Flatten_instance = null;
  function Flatten_getInstance() {
    if (Flatten_instance === null) {
      new Flatten();
    }
    return Flatten_instance;
  }
  function ExpandSub() {
    ExpandSub_instance = this;
    this.name_damktx$_0 = 'ExpandSub';
  }
  Object.defineProperty(ExpandSub.prototype, 'name', {
    get: function () {
      return this.name_damktx$_0;
    }
  });
  ExpandSub.prototype.expandSub_0 = function (ast) {
    return Kotlin.isType(ast, Call) && Kotlin.isType(ast.op, Sub) ? new Call(Add_getInstance(), this.expandSub_0(ast.left), new UnaryCall(Negate_getInstance(), this.expandSub_0(ast.right))) : recurseHelper(ast, getCallableRef('expandSub', function ($receiver, ast) {
      return $receiver.expandSub_0(ast);
    }.bind(null, this)));
  };
  ExpandSub.prototype.run_qaijlk$ = function (ast) {
    return this.expandSub_0(ast);
  };
  ExpandSub.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ExpandSub',
    interfaces: [Pass]
  };
  var ExpandSub_instance = null;
  function ExpandSub_getInstance() {
    if (ExpandSub_instance === null) {
      new ExpandSub();
    }
    return ExpandSub_instance;
  }
  function ExpandConst() {
    ExpandConst_instance = this;
    this.name_42vuz6$_0 = 'ExpandConst';
  }
  Object.defineProperty(ExpandConst.prototype, 'name', {
    get: function () {
      return this.name_42vuz6$_0;
    }
  });
  ExpandConst.prototype.addFromZero_0 = function (value) {
    if (value === 0) {
      return new Const(0);
    }
    return new Call(Add_getInstance(), this.addFromZero_0(value - 1 | 0), new Const(1));
  };
  ExpandConst.prototype.expand_0 = function (ast) {
    if (Kotlin.isType(ast, Const))
      return this.addFromZero_0(ast.value);
    else
      return recurseHelper(ast, getCallableRef('expand', function ($receiver, ast) {
        return $receiver.expand_0(ast);
      }.bind(null, this)));
  };
  ExpandConst.prototype.run_qaijlk$ = function (ast) {
    return this.expand_0(ast);
  };
  ExpandConst.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ExpandConst',
    interfaces: [Pass]
  };
  var ExpandConst_instance = null;
  function ExpandConst_getInstance() {
    if (ExpandConst_instance === null) {
      new ExpandConst();
    }
    return ExpandConst_instance;
  }
  function ExpandUnary() {
    ExpandUnary_instance = this;
    this.name_vkevnq$_0 = 'ExpandUnary';
  }
  Object.defineProperty(ExpandUnary.prototype, 'name', {
    get: function () {
      return this.name_vkevnq$_0;
    }
  });
  ExpandUnary.prototype.expandUnary_0 = function (ast) {
    var tmp$;
    if (Kotlin.isType(ast, UnaryCall))
      if (Kotlin.isType(ast.op, Negate)) {
        tmp$ = new Call(Mul_getInstance(), new Const(-1), this.expandUnary_0(ast.arg));
      }
       else {
        tmp$ = new UnaryCall(ast.op, this.expandUnary_0(ast.arg));
      }
     else if (Kotlin.isType(ast, Call))
      tmp$ = new Call(ast.op, this.expandUnary_0(ast.left), this.expandUnary_0(ast.right));
    else
      tmp$ = recurseHelper(ast, getCallableRef('expandUnary', function ($receiver, ast) {
        return $receiver.expandUnary_0(ast);
      }.bind(null, this)));
    return tmp$;
  };
  ExpandUnary.prototype.run_qaijlk$ = function (ast) {
    return this.expandUnary_0(ast);
  };
  ExpandUnary.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ExpandUnary',
    interfaces: [Pass]
  };
  var ExpandUnary_instance = null;
  function ExpandUnary_getInstance() {
    if (ExpandUnary_instance === null) {
      new ExpandUnary();
    }
    return ExpandUnary_instance;
  }
  function Normalize() {
    Normalize_instance = this;
    this.name_jz3hwu$_0 = 'Normalize';
  }
  Object.defineProperty(Normalize.prototype, 'name', {
    get: function () {
      return this.name_jz3hwu$_0;
    }
  });
  Normalize.prototype.run_qaijlk$ = function (ast) {
    return runPasses(ast, [Flatten_getInstance(), CanonicalAdds_getInstance(), CanonicalMuls_getInstance(), Unflatten_getInstance()]);
  };
  Normalize.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Normalize',
    interfaces: [Pass]
  };
  var Normalize_instance = null;
  function Normalize_getInstance() {
    if (Normalize_instance === null) {
      new Normalize();
    }
    return Normalize_instance;
  }
  function isConst($receiver, value) {
    return Kotlin.isType($receiver, Const) && $receiver.value === value;
  }
  function CleanZerosOnes() {
    CleanZerosOnes_instance = this;
    this.name_twxkus$_0 = 'CleanZerosOnes';
  }
  Object.defineProperty(CleanZerosOnes.prototype, 'name', {
    get: function () {
      return this.name_twxkus$_0;
    }
  });
  CleanZerosOnes.prototype.clean_0 = function (ast) {
    if (Kotlin.isType(ast, Call))
      if (equals(ast.op, Mul_getInstance())) {
        if (isConst(ast.left, 0) || isConst(ast.right, 0)) {
          return new Const(0);
        }
         else if (isConst(ast.left, 1)) {
          return this.clean_0(ast.right);
        }
         else if (isConst(ast.right, 1)) {
          return this.clean_0(ast.left);
        }
         else {
          return new Call(ast.op, this.clean_0(ast.left), this.clean_0(ast.right));
        }
      }
       else if (equals(ast.op, Add_getInstance()) || equals(ast.op, Sub_getInstance())) {
        if (isConst(ast.left, 0)) {
          return this.clean_0(ast.right);
        }
         else if (isConst(ast.right, 0)) {
          return this.clean_0(ast.left);
        }
         else
          return new Call(ast.op, this.clean_0(ast.left), this.clean_0(ast.right));
      }
       else {
        return new Call(ast.op, this.clean_0(ast.left), this.clean_0(ast.right));
      }
     else if (Kotlin.isType(ast, FlatCall))
      throw new NotImplementedError_init();
    else
      return recurseHelper(ast, getCallableRef('clean', function ($receiver, ast) {
        return $receiver.clean_0(ast);
      }.bind(null, this)));
  };
  function CleanZerosOnes$run$lambda(this$CleanZerosOnes) {
    return function (it) {
      return this$CleanZerosOnes.clean_0(it);
    };
  }
  CleanZerosOnes.prototype.run_qaijlk$ = function (ast) {
    return runUntilStable(ast, CleanZerosOnes$run$lambda(this));
  };
  CleanZerosOnes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CleanZerosOnes',
    interfaces: [Pass]
  };
  var CleanZerosOnes_instance = null;
  function CleanZerosOnes_getInstance() {
    if (CleanZerosOnes_instance === null) {
      new CleanZerosOnes();
    }
    return CleanZerosOnes_instance;
  }
  function CleanNegOnes() {
    CleanNegOnes_instance = this;
    this.name_ozps35$_0 = 'CleanNegOnes';
  }
  Object.defineProperty(CleanNegOnes.prototype, 'name', {
    get: function () {
      return this.name_ozps35$_0;
    }
  });
  CleanNegOnes.prototype.clean_0 = function (ast) {
    var tmp$;
    if (Kotlin.isType(ast, FlatCall) && equals(ast.op, Mul_getInstance())) {
      var args = ast.args;
      var indexOfFirst$result;
      indexOfFirst$break: do {
        var tmp$_0;
        var index = 0;
        tmp$_0 = args.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          if (isConst(item, -1)) {
            indexOfFirst$result = index;
            break indexOfFirst$break;
          }
          index = index + 1 | 0;
        }
        indexOfFirst$result = -1;
      }
       while (false);
      var start = indexOfFirst$result;
      var indexOfLast$result;
      indexOfLast$break: do {
        var iterator = args.listIterator_za3lpa$(args.size);
        while (iterator.hasPrevious()) {
          if (isConst(iterator.previous(), -1)) {
            indexOfLast$result = iterator.nextIndex();
            break indexOfLast$break;
          }
        }
        indexOfLast$result = -1;
      }
       while (false);
      var end = indexOfLast$result;
      if (start !== -1 && end !== -1) {
        var noNegOnes = plus(args.subList_vux9f0$(0, start), args.subList_vux9f0$(end + 1 | 0, args.size));
        var numNegOnes = start - end + 1 | 0;
        if (numNegOnes % 2 !== 0) {
          tmp$ = plus(listOf_0([new Const(-1), new Const(1)]), noNegOnes);
        }
         else {
          tmp$ = plus(listOf_0([new Const(1), new Const(1)]), noNegOnes);
        }
        var newArgs = tmp$;
        var tmp$_1 = void 0;
        var destination = ArrayList_init_0(collectionSizeOrDefault(newArgs, 10));
        var tmp$_2;
        tmp$_2 = newArgs.iterator();
        while (tmp$_2.hasNext()) {
          var item_0 = tmp$_2.next();
          destination.add_11rb$(recurseHelper(item_0, getCallableRef('clean', function ($receiver, ast) {
            return $receiver.clean_0(ast);
          }.bind(null, this))));
        }
        return ast.copy_svci32$(tmp$_1, destination);
      }
       else
        return recurseHelper(ast, getCallableRef('clean', function ($receiver, ast) {
          return $receiver.clean_0(ast);
        }.bind(null, this)));
    }
     else {
      return recurseHelper(ast, getCallableRef('clean', function ($receiver, ast) {
        return $receiver.clean_0(ast);
      }.bind(null, this)));
    }
  };
  CleanNegOnes.prototype.run_qaijlk$ = function (ast) {
    var preprocess = CanonicalMuls_getInstance().run_qaijlk$(Flatten_getInstance().run_qaijlk$(ast));
    return Unflatten_getInstance().run_qaijlk$(this.clean_0(preprocess));
  };
  CleanNegOnes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CleanNegOnes',
    interfaces: [Pass]
  };
  var CleanNegOnes_instance = null;
  function CleanNegOnes_getInstance() {
    if (CleanNegOnes_instance === null) {
      new CleanNegOnes();
    }
    return CleanNegOnes_instance;
  }
  function Unflatten() {
    Unflatten_instance = this;
    this.name_uaf0pc$_0 = 'Unflatten';
  }
  Object.defineProperty(Unflatten.prototype, 'name', {
    get: function () {
      return this.name_uaf0pc$_0;
    }
  });
  Unflatten.prototype.unflattenCallArgs_f1azws$ = function (argList, op) {
    if (argList.size === 1) {
      return first(argList);
    }
    return new Call(op, this.unflattenCallArgs_f1azws$(argList.subList_vux9f0$(0, argList.size - 1 | 0), op), last(argList));
  };
  Unflatten.prototype.unflatten_0 = function (ast) {
    if (Kotlin.isType(ast, Call))
      return new Call(ast.op, this.unflatten_0(ast.left), this.unflatten_0(ast.right));
    else if (Kotlin.isType(ast, FlatCall))
      return this.unflattenCallArgs_f1azws$(ast.args, ast.op);
    else
      return ast;
  };
  function Unflatten$run$lambda(this$Unflatten) {
    return function (it) {
      return this$Unflatten.unflatten_0(it);
    };
  }
  Unflatten.prototype.run_qaijlk$ = function (ast) {
    return runUntilStable(ast, Unflatten$run$lambda(this));
  };
  Unflatten.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Unflatten',
    interfaces: [Pass]
  };
  var Unflatten_instance = null;
  function Unflatten_getInstance() {
    if (Unflatten_instance === null) {
      new Unflatten();
    }
    return Unflatten_instance;
  }
  function NegOnesToUnary() {
    NegOnesToUnary_instance = this;
    this.name_awtqb8$_0 = 'NegOnesToUnary';
  }
  Object.defineProperty(NegOnesToUnary.prototype, 'name', {
    get: function () {
      return this.name_awtqb8$_0;
    }
  });
  NegOnesToUnary.prototype.clean_0 = function (ast) {
    if (Kotlin.isType(ast, FlatCall) && Kotlin.isType(ast.op, Mul) && isConst(first(ast.args), -1)) {
      if (ast.args.size === 2) {
        return new UnaryCall(Negate_getInstance(), ast.args.get_za3lpa$(1));
      }
       else
        return new UnaryCall(Negate_getInstance(), recurseHelper(new FlatCall(ast.op, ast.args.subList_vux9f0$(1, ast.args.size)), getCallableRef('clean', function ($receiver, ast) {
          return $receiver.clean_0(ast);
        }.bind(null, this))));
    }
     else
      return recurseHelper(ast, getCallableRef('clean', function ($receiver, ast) {
        return $receiver.clean_0(ast);
      }.bind(null, this)));
  };
  NegOnesToUnary.prototype.run_qaijlk$ = function (ast) {
    return runUntilStable(Flatten_getInstance().run_qaijlk$(ast), getCallableRef('clean', function ($receiver, ast) {
      return $receiver.clean_0(ast);
    }.bind(null, this)));
  };
  NegOnesToUnary.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NegOnesToUnary',
    interfaces: [Pass]
  };
  var NegOnesToUnary_instance = null;
  function NegOnesToUnary_getInstance() {
    if (NegOnesToUnary_instance === null) {
      new NegOnesToUnary();
    }
    return NegOnesToUnary_instance;
  }
  function ReduceAddNegates() {
    ReduceAddNegates_instance = this;
    this.name_wdire5$_0 = 'ReduceAddNegates';
  }
  Object.defineProperty(ReduceAddNegates.prototype, 'name', {
    get: function () {
      return this.name_wdire5$_0;
    }
  });
  ReduceAddNegates.prototype.clean_0 = function (ast) {
    var tmp$;
    if (Kotlin.isType(ast, FlatCall)) {
      var tmp$_0 = void 0;
      var $receiver = ast.args;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(this.clean_0(item));
      }
      var newCall = ast.copy_svci32$(tmp$_0, destination);
      if (!Kotlin.isType(ast.op, Add)) {
        return newCall;
      }
      var $receiver_0 = newCall.args;
      var destination_0 = ArrayList_init();
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        var list = Kotlin.isType(element, UnaryCall) && Kotlin.isType(element.op, Negate) ? listOf(element.arg) : emptyList();
        addAll(destination_0, list);
      }
      var negatives = destination_0;
      var $receiver_1 = newCall.args;
      var destination_1 = ArrayList_init();
      var tmp$_3;
      tmp$_3 = $receiver_1.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        if (!(Kotlin.isType(element_0, UnaryCall) && Kotlin.isType(element_0.op, Negate)))
          destination_1.add_11rb$(element_0);
      }
      var positives = destination_1;
      var destination_2 = LinkedHashMap_init();
      var tmp$_4;
      tmp$_4 = negatives.iterator();
      while (tmp$_4.hasNext()) {
        var element_1 = tmp$_4.next();
        var key = hashCode(element_1);
        var tmp$_0_0;
        var value = destination_2.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          destination_2.put_xwzc9p$(key, answer);
          tmp$_0_0 = answer;
        }
         else {
          tmp$_0_0 = value;
        }
        var list_0 = tmp$_0_0;
        list_0.add_11rb$(element_1);
      }
      var destination_3 = LinkedHashMap_init_0(mapCapacity(destination_2.size));
      var tmp$_5;
      tmp$_5 = destination_2.entries.iterator();
      while (tmp$_5.hasNext()) {
        var element_2 = tmp$_5.next();
        destination_3.put_xwzc9p$(first(element_2.value), element_2.value);
      }
      var destination_4 = LinkedHashMap_init_0(mapCapacity(destination_3.size));
      var tmp$_6;
      tmp$_6 = destination_3.entries.iterator();
      while (tmp$_6.hasNext()) {
        var element_3 = tmp$_6.next();
        destination_4.put_xwzc9p$(element_3.key, element_3.value.size);
      }
      var groupNegatives = destination_4;
      var destination_5 = LinkedHashMap_init();
      var tmp$_7;
      tmp$_7 = positives.iterator();
      while (tmp$_7.hasNext()) {
        var element_4 = tmp$_7.next();
        var key_0 = hashCode(element_4);
        var tmp$_0_1;
        var value_0 = destination_5.get_11rb$(key_0);
        if (value_0 == null) {
          var answer_0 = ArrayList_init();
          destination_5.put_xwzc9p$(key_0, answer_0);
          tmp$_0_1 = answer_0;
        }
         else {
          tmp$_0_1 = value_0;
        }
        var list_1 = tmp$_0_1;
        list_1.add_11rb$(element_4);
      }
      var destination_6 = LinkedHashMap_init_0(mapCapacity(destination_5.size));
      var tmp$_8;
      tmp$_8 = destination_5.entries.iterator();
      while (tmp$_8.hasNext()) {
        var element_5 = tmp$_8.next();
        destination_6.put_xwzc9p$(first(element_5.value), element_5.value);
      }
      var destination_7 = LinkedHashMap_init_0(mapCapacity(destination_6.size));
      var tmp$_9;
      tmp$_9 = destination_6.entries.iterator();
      while (tmp$_9.hasNext()) {
        var element_6 = tmp$_9.next();
        destination_7.put_xwzc9p$(element_6.key, element_6.value.size);
      }
      var groupPositives = destination_7;
      var newNegatives = toMutableMap(groupNegatives);
      var newPositives = toMutableMap(groupPositives);
      tmp$ = intersect(groupNegatives.keys, groupPositives.keys).iterator();
      while (tmp$.hasNext()) {
        var astKey = tmp$.next();
        var tmp$_10;
        var numNegs = (tmp$_10 = groupNegatives.get_11rb$(astKey)) != null ? tmp$_10 : 0;
        var tmp$_11;
        var numPos = (tmp$_11 = groupPositives.get_11rb$(astKey)) != null ? tmp$_11 : 0;
        var smaller = Math_0.min(numNegs, numPos);
        var value_1 = numNegs - smaller | 0;
        newNegatives.put_xwzc9p$(astKey, value_1);
        var value_2 = numPos - smaller | 0;
        newPositives.put_xwzc9p$(astKey, value_2);
      }
      var newArgs = ArrayList_init();
      var tmp$_12;
      tmp$_12 = newNegatives.entries.iterator();
      while (tmp$_12.hasNext()) {
        var element_7 = tmp$_12.next();
        var tmp$_13;
        tmp$_13 = element_7.value;
        for (var i = 0; i < tmp$_13; i++)
          newArgs.add_11rb$(new UnaryCall(Negate_getInstance(), element_7.key));
      }
      var tmp$_14;
      tmp$_14 = newPositives.entries.iterator();
      while (tmp$_14.hasNext()) {
        var element_8 = tmp$_14.next();
        var tmp$_15;
        tmp$_15 = element_8.value;
        for (var i_0 = 0; i_0 < tmp$_15; i_0++)
          newArgs.add_11rb$(element_8.key);
      }
      if (newArgs.size === 1) {
        return first(newArgs);
      }
       else if (newArgs.isEmpty()) {
        return new Const(0);
      }
      return newCall.copy_svci32$(void 0, newArgs);
    }
     else
      return recurseHelper(ast, getCallableRef('clean', function ($receiver, ast) {
        return $receiver.clean_0(ast);
      }.bind(null, this)));
  };
  ReduceAddNegates.prototype.run_qaijlk$ = function (ast) {
    var preprocessed = Flatten_getInstance().run_qaijlk$(ast);
    return this.clean_0(preprocessed);
  };
  ReduceAddNegates.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReduceAddNegates',
    interfaces: [Pass]
  };
  var ReduceAddNegates_instance = null;
  function ReduceAddNegates_getInstance() {
    if (ReduceAddNegates_instance === null) {
      new ReduceAddNegates();
    }
    return ReduceAddNegates_instance;
  }
  function CanonicalAdds() {
    CanonicalAdds_instance = this;
    this.name_z6a9md$_0 = 'CanonicalAdds';
  }
  Object.defineProperty(CanonicalAdds.prototype, 'name', {
    get: function () {
      return this.name_z6a9md$_0;
    }
  });
  function CanonicalAdds$swap$lambda(it) {
    return hashCode(it);
  }
  CanonicalAdds.prototype.swap_0 = function (ast) {
    if (Kotlin.isType(ast, Call))
      if (Kotlin.isType(ast.op, Add)) {
        var newCall = new Call(ast.op, this.swap_0(ast.left), this.swap_0(ast.right));
        if (hashCode(newCall.left) > hashCode(newCall.right)) {
          return new Call(ast.op, newCall.right, newCall.left);
        }
         else
          return newCall;
      }
       else {
        return new Call(ast.op, this.swap_0(ast.left), this.swap_0(ast.right));
      }
     else if (Kotlin.isType(ast, FlatCall)) {
      var tmp$ = ast.op;
      var $receiver = ast.args;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(this.swap_0(item));
      }
      var newCall_0 = new FlatCall(tmp$, destination);
      if (Kotlin.isType(ast.op, Add)) {
        return new FlatCall(newCall_0.op, sortedWith(newCall_0.args, new Comparator$ObjectLiteral(compareBy$lambda(CanonicalAdds$swap$lambda))));
      }
       else {
        return newCall_0;
      }
    }
     else
      return ast;
  };
  function CanonicalAdds$run$lambda(this$CanonicalAdds) {
    return function (it) {
      return this$CanonicalAdds.swap_0(it);
    };
  }
  CanonicalAdds.prototype.run_qaijlk$ = function (ast) {
    return runUntilStable(ast, CanonicalAdds$run$lambda(this));
  };
  CanonicalAdds.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CanonicalAdds',
    interfaces: [Pass]
  };
  var CanonicalAdds_instance = null;
  function CanonicalAdds_getInstance() {
    if (CanonicalAdds_instance === null) {
      new CanonicalAdds();
    }
    return CanonicalAdds_instance;
  }
  function CanonicalMuls() {
    CanonicalMuls_instance = this;
    this.name_3edtu0$_0 = 'CanonicalMuls';
  }
  Object.defineProperty(CanonicalMuls.prototype, 'name', {
    get: function () {
      return this.name_3edtu0$_0;
    }
  });
  function CanonicalMuls$swap$lambda(it) {
    return hashCode(it);
  }
  CanonicalMuls.prototype.swap_0 = function (ast) {
    if (Kotlin.isType(ast, Call))
      if (Kotlin.isType(ast.op, Mul)) {
        var newCall = new Call(ast.op, this.swap_0(ast.left), this.swap_0(ast.right));
        if (hashCode(newCall.left) > hashCode(newCall.right)) {
          return new Call(ast.op, newCall.right, newCall.left);
        }
         else
          return newCall;
      }
       else {
        return new Call(ast.op, this.swap_0(ast.left), this.swap_0(ast.right));
      }
     else if (Kotlin.isType(ast, FlatCall)) {
      var tmp$ = ast.op;
      var $receiver = ast.args;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(this.swap_0(item));
      }
      var newCall_0 = new FlatCall(tmp$, destination);
      if (Kotlin.isType(ast.op, Mul)) {
        return new FlatCall(newCall_0.op, sortedWith(newCall_0.args, new Comparator$ObjectLiteral(compareBy$lambda(CanonicalMuls$swap$lambda))));
      }
       else {
        return newCall_0;
      }
    }
     else
      return ast;
  };
  function CanonicalMuls$run$lambda(this$CanonicalMuls) {
    return function (it) {
      return this$CanonicalMuls.swap_0(it);
    };
  }
  CanonicalMuls.prototype.run_qaijlk$ = function (ast) {
    return runUntilStable(ast, CanonicalMuls$run$lambda(this));
  };
  CanonicalMuls.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CanonicalMuls',
    interfaces: [Pass]
  };
  var CanonicalMuls_instance = null;
  function CanonicalMuls_getInstance() {
    if (CanonicalMuls_instance === null) {
      new CanonicalMuls();
    }
    return CanonicalMuls_instance;
  }
  Object.defineProperty(TokenType, 'CONST', {
    get: TokenType$CONST_getInstance
  });
  Object.defineProperty(TokenType, 'VAR', {
    get: TokenType$VAR_getInstance
  });
  Object.defineProperty(TokenType, 'MINUS', {
    get: TokenType$MINUS_getInstance
  });
  Object.defineProperty(TokenType, 'PLUS', {
    get: TokenType$PLUS_getInstance
  });
  Object.defineProperty(TokenType, 'TIMES', {
    get: TokenType$TIMES_getInstance
  });
  Object.defineProperty(TokenType, 'DIV', {
    get: TokenType$DIV_getInstance
  });
  Object.defineProperty(TokenType, 'RPAR', {
    get: TokenType$RPAR_getInstance
  });
  Object.defineProperty(TokenType, 'LPAR', {
    get: TokenType$LPAR_getInstance
  });
  Object.defineProperty(TokenType, 'EOF', {
    get: TokenType$EOF_getInstance
  });
  var package$symbolic = _.symbolic || (_.symbolic = {});
  package$symbolic.TokenType = TokenType;
  Token.CONST = Token$CONST;
  Token.VAR = Token$VAR;
  Object.defineProperty(Token, 'LPAR', {
    get: Token$LPAR_getInstance
  });
  Object.defineProperty(Token, 'RPAR', {
    get: Token$RPAR_getInstance
  });
  Object.defineProperty(Token, 'EOF', {
    get: Token$EOF_getInstance
  });
  Object.defineProperty(Token$OP, 'ADD', {
    get: Token$OP$ADD_getInstance
  });
  Object.defineProperty(Token$OP, 'SUB', {
    get: Token$OP$SUB_getInstance
  });
  Object.defineProperty(Token$OP, 'MUL', {
    get: Token$OP$MUL_getInstance
  });
  Object.defineProperty(Token$OP, 'DIV', {
    get: Token$OP$DIV_getInstance
  });
  Token.OP = Token$OP;
  Object.defineProperty(Token, 'Companion', {
    get: Token$Companion_getInstance
  });
  package$symbolic.Token = Token;
  package$symbolic.isOpOrParens_myv2d0$ = isOpOrParens;
  package$symbolic.Tokens_init_61zpoe$ = Tokens_init;
  package$symbolic.Tokens_init_emp7la$ = Tokens_init_0;
  package$symbolic.Tokens = Tokens;
  Object.defineProperty(package$symbolic, 'Lexer', {
    get: Lexer_getInstance
  });
  package$symbolic.runPasses_1xhwyd$ = runPasses;
  package$symbolic.normalize_61zpoe$ = normalize;
  package$symbolic.main = main;
  Object.defineProperty(Op, 'Companion', {
    get: Op$Companion_getInstance
  });
  package$symbolic.Op = Op;
  package$symbolic.Additive = Additive;
  package$symbolic.Multiplicative = Multiplicative;
  Object.defineProperty(package$symbolic, 'Add', {
    get: Add_getInstance
  });
  Object.defineProperty(package$symbolic, 'Sub', {
    get: Sub_getInstance
  });
  Object.defineProperty(package$symbolic, 'Div', {
    get: Div_getInstance
  });
  Object.defineProperty(package$symbolic, 'Mul', {
    get: Mul_getInstance
  });
  package$symbolic.Unary = Unary;
  Object.defineProperty(package$symbolic, 'Negate', {
    get: Negate_getInstance
  });
  Object.defineProperty(ASTNode, 'Companion', {
    get: ASTNode$Companion_getInstance
  });
  package$symbolic.ASTNode = ASTNode;
  package$symbolic.UnaryCall = UnaryCall;
  package$symbolic.Call = Call;
  package$symbolic.FlatCall = FlatCall;
  package$symbolic.Var = Var;
  package$symbolic.Const = Const;
  Object.defineProperty(Parser, 'Companion', {
    get: Parser$Companion_getInstance
  });
  package$symbolic.Parser = Parser;
  package$symbolic.Pass = Pass;
  package$symbolic.runUntilStable_om4tiq$ = runUntilStable;
  package$symbolic.recurseHelper_om4tiq$ = recurseHelper;
  Object.defineProperty(package$symbolic, 'Distributive', {
    get: Distributive_getInstance
  });
  Object.defineProperty(package$symbolic, 'Flatten', {
    get: Flatten_getInstance
  });
  Object.defineProperty(package$symbolic, 'ExpandSub', {
    get: ExpandSub_getInstance
  });
  Object.defineProperty(package$symbolic, 'ExpandConst', {
    get: ExpandConst_getInstance
  });
  Object.defineProperty(package$symbolic, 'ExpandUnary', {
    get: ExpandUnary_getInstance
  });
  Object.defineProperty(package$symbolic, 'Normalize', {
    get: Normalize_getInstance
  });
  package$symbolic.isConst_ulbz49$ = isConst;
  Object.defineProperty(package$symbolic, 'CleanZerosOnes', {
    get: CleanZerosOnes_getInstance
  });
  Object.defineProperty(package$symbolic, 'CleanNegOnes', {
    get: CleanNegOnes_getInstance
  });
  Object.defineProperty(package$symbolic, 'Unflatten', {
    get: Unflatten_getInstance
  });
  Object.defineProperty(package$symbolic, 'NegOnesToUnary', {
    get: NegOnesToUnary_getInstance
  });
  Object.defineProperty(package$symbolic, 'ReduceAddNegates', {
    get: ReduceAddNegates_getInstance
  });
  Object.defineProperty(package$symbolic, 'CanonicalAdds', {
    get: CanonicalAdds_getInstance
  });
  Object.defineProperty(package$symbolic, 'CanonicalMuls', {
    get: CanonicalMuls_getInstance
  });
  main();
  Kotlin.defineModule('symbolic', _);
  return _;
}));

//# sourceMappingURL=symbolic.js.map
