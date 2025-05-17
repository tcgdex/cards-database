import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		it: "Vikavolt",
		de: "Donarion",
		'pt-br': "Vikavolt",
		ko: "투구뿌논"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Charjabug"
	},

	description: {
		en: "It builds up electricity in its abdomen, focuses it through its jaws, and then fires the electricity off in concentrated beams.",
		fr: "L'électricité qu'il produit dans son ventre\ns'accumule dans ses larges mandibules.\nIl la libère sous forme d'un rayon puissant.",
		es: "Acumula en sus enormes mandíbulas la carga eléctrica que genera\nen su abdomen y la libera en forma de rayos de alto voltaje.",
		it: "Concentra nelle grandi mandibole l'elettricità\ngenerata nella pancia per colpire l'avversario\ncon un raggio ad altissima potenza.",
		de: "In seinem Bauch erzeugt es Elektrizität, die es in\nseinem großen Kiefer sammelt und dann als\nHochleistungsstrahlen abfeuern kann.",
		'pt-br': "Acumula eletricidade no seu abdômen, depois a focaliza\nna sua mandíbula e a dispara em raios concentrados.",
		ko: "복부에서 만든 전기를\n커다란 턱에 집중시켜서\n고출력의 빔을 쏜다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Disconnect",
			fr: "Déconnexion",
			es: "Desconectar",
			it: "Disconnessione",
			de: "Unterbrechen",
			'pt-br': "Desconexão",
			ko: "전자장해"
		},

		damage: 70,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			it: "Il tuo avversario non può giocare le carte Strumento che ha in mano durante il suo prossimo turno.",
			de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen.",
			'pt-br': "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			ko: "상대의 다음 차례에 상대는 패에서 아이템을 꺼내서 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card