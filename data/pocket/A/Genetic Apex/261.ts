import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar ex",
		fr: "Ectoplasma-ex",
		es: "Gengar ex",
		it: "Gengar-ex",
		de: "Gengar-ex",
		'pt-br': "Gengar ex",
		ko: "팬텀 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [94],
	hp: 170,
	types: ["Psychic"],
	stage: "Stage2",

	evolveFrom: {
		en: "Haunter"
	},

	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Shadowy Spellbind",
			fr: "Maléfice des Ombres",
			es: "Hechizo Sombrío",
			it: "Maledizione Oscura",
			de: "Schattenbann",
			'pt-br': "Enfeitiçamento Sombrio",
			ko: "그림자 속박"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent can't use any Supporter cards from their hand.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de carte Supporter de sa main.",
			es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Partidario de su mano.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Aiuto che ha in mano.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Unterstützerkarten aus seiner Hand spielen.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, o seu oponente não poderá usar nenhuma carta de Apoiador da mão dele.",
			ko: "이 포켓몬이 배틀필드에 있는 한, 상대는 패에서 서포트를 꺼내서 사용할 수 없다."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			it: "Colpomistero",
			de: "Spukschuss",
			'pt-br': "Tiro Assustador",
			ko: "홀로숏"
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
