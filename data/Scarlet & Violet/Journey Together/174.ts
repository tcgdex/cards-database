import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Mamoswine ex",
		fr: "Mammochon-ex",
		es: "Mamoswine ex",
		de: "Mamutel-ex",
		it: "Mamoswine-ex",
		pt: "Mamoswine ex",
		'es-mx': "Mamoswine ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mammoth Hauler",
			fr: "Transport Mammouth",
			es: "Transporte Mamut",
			de: "Mammut-Transport",
			it: "Trasporto Mastodontico",
			pt: "Reboque Mastodôntico",
			'es-mx': "Transporte Mamut"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck un Pokémon, le montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 Pokémon, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo un Pokémon, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por um Pokémon no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo 1 Pokémon, mostrarlo y ponerlo en tu mano. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Rumbling March",
			fr: "Marche Grondante",
			es: "Marcha Estruendosa",
			de: "Bebender Marsch",
			it: "Marcia Rombante",
			pt: "Marcha Estrondosa",
			'es-mx': "Marcha Retumbante"
		},

		effect: {
			en: "This attack does 40 more damage for each Stage 2 Pokémon on your Bench.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Pokémon de Niveau 2 sur votre Banc.",
			es: "Este ataque hace 40 puntos de daño más por cada Pokémon de Fase 2 en tu Banca.",
			de: "Diese Attacke fügt für jedes Phase-2-Pokémon auf deiner Bank 40 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 40 danni in più per ogni Pokémon di Fase 2 nella tua panchina.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Pokémon Estágio 2 no seu Banco.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon de Fase 2 en Banca."
		},

		damage: "180+"
	}],

	retreat: 4,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
