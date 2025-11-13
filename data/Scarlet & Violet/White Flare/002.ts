import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [541],
	set: Set,

	name: {
		en: "Swadloon",
		fr: "Couverdure",
		de: "Folikon",
		it: "Swadloon",
		pt: "Swadloon",
		es: "Swadloon",
		'es-mx': "Swadloon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
		de: "Strawickl",
		it: "Sewaddle",
		pt: "Sewaddle",
		es: "Sewaddle",
		'es-mx': "Sewaddle"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Healing Leaves",
			fr: "Feuillage Apaisant",
			de: "Heilende Blätter",
			it: "Foglie Curative",
			pt: "Folhas Curativas",
			es: "Hojas Curativas",
			'es-mx': "Hojas Sanadoras"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from your Active Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
			de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Pokémon heilen.",
			it: "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon attivo da 20 danni.",
			pt: "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon Ativo.",
			es: "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Activo.",
			'es-mx': "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Activo."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Bug Buzz",
			fr: "Bourdon",
			de: "Käfergebrumm",
			it: "Ronzio",
			pt: "Zumbido de Inseto",
			es: "Zumbido",
			'es-mx': "Zumbido"
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835899
	}
}

export default card