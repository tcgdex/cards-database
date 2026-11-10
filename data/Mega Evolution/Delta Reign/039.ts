import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmot",
		fr: "Pohmarmotte",
		de: "Pamomamo",
		es: "Pawmot",
		it: "Pawmot",
		pt: "Pawmot",
		'es-mx': "Pawmot"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Generator's Touch",
			fr: "Contact de Générateur",
			de: "Generatorhändchen",
			es: "Toque del Generador",
			it: "Tocco del Generatore",
			pt: "Toque Gerador",
			'es-mx': "Toque Generador"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Attach a Basic Lightning Energy card from your discard pile to 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Attachez une carte Énergie Lightning de base de votre pile de défausse à l'un de vos Pokémon.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Lege 1 Basis-Lightning-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon an.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Une 1 carta de Energía Lightning Básica de tu pila de descartes a uno de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Assegna a uno dei tuoi Pokémon una carta Energia base Lightning dalla tua pila degli scarti.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Ligue uma carta de Energia Lightning Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Une 1 carta de Energía Lightning Básica de tu pila de descartes a 1 de tus Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Electric Punch",
			fr: "Poing Électrique",
			de: "Elektroschlag",
			es: "Puño Eléctrico",
			it: "Pugno Elettrico",
			pt: "Murro Elétrico",
			'es-mx': "Puño Eléctrico"
		},

		damage: 100,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 727585,
		cardmarket: 918856
	}
}

export default card