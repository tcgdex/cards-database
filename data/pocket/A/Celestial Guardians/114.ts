import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'de-de': "Deponitox",
		'pt-br': "Garbodor",
		'ko-kr': "더스트나"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [569],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Trubbish"
	},

	description: {
		'en-us': "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten.",
		'fr-fr': "Il produit du poison dans son corps à partir\ndes ordures qu'il ingurgite. Selon ce qu'il\nmange, la composition des toxines diffère.",
		'es-es': "Su cuerpo transforma la inmundicia que engulle en un\nveneno cuya composición cambia según la basura ingerida.",
		'it-it': "Mangia spazzatura e la trasforma in un veleno la cui\ncomposizione cambia a seconda di cosa ha ingurgitato.",
		'de-de': "Es frisst Müll und verdaut ihn in seinem Inneren zu Gift.\nJe nach Art des Mülls, den es verzehrt, ändern sich die\nHauptbestandteile des Giftes.",
		'pt-br': "Este Pokémon se alimenta de lixo, que transforma\nem veneno dentro do seu corpo. O componente principal\ndo veneno depende do tipo de lixo que comeu.",
		'ko-kr': "먹은 쓰레기가 체내에서 독으로\n변화한다. 먹은 쓰레기에 따라\n독의 주성분도 바뀐다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Super Poison Breath",
			'fr-fr': "Super Haleine Empoisonnée",
			'es-es': "Aliento Supervenenoso",
			'it-it': "Super Velenospiro",
			'de-de': "Super-Gifthauch",
			'pt-br': "Super-hálito Venenoso",
			'ko-kr': "독의숨"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			
			'ko-kr': "상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo", "lunala"]
}

export default card