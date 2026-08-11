import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gengar ex",
		'fr-fr': "Ectoplasma-ex",
		'es-es': "Gengar ex",
		'it-it': "Gengar-ex",
		'de-de': "Gengar-ex",
		'pt-br': "Gengar ex",
		'ko-kr': "팬텀 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [94],
	hp: 170,
	types: ["Psychic"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Haunter"
	},

	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Shadowy Spellbind",
			'fr-fr': "Maléfice des Ombres",
			'es-es': "Hechizo Sombrío",
			'it-it': "Maledizione Oscura",
			'de-de': "Schattenbann",
			'pt-br': "Enfeitiçamento Sombrio",
			'ko-kr': "그림자 속박"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent can't use any Supporter cards from their hand.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de carte Supporter de sa main.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Partidario de su mano.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Aiuto che ha in mano.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Unterstützerkarten aus seiner Hand spielen.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, o seu oponente não poderá usar nenhuma carta de Apoiador da mão dele.",
			'ko-kr': "이 포켓몬이 배틀필드에 있는 한, 상대는 패에서 서포트를 꺼내서 사용할 수 없다."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'it-it': "Colpomistero",
			'de-de': "Spukschuss",
			'pt-br': "Tiro Assustador",
			'ko-kr': "홀로숏"
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Star",
	boosters: ["mewtwo"]
}

export default card
