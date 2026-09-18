import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "This Pokémon was born in a special land. It scatters colorful, toxic scales from its wings during battle."
	},

	name: {
		en: "Vivillon",
		fr: "Prismillon",
		de: "Vivillon",
		es: "Vivillon",
		it: "Vivillon",
		'es-mx': "Vivillon"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [666],
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Guiding Dance",
			fr: "Danse Directrice",
			de: "Leitender Tanz",
			es: "Danza Guía",
			it: "Danza Guida",
			'es-mx': "Danza Guía"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Lanza 1 moneda. Si sale cara, busca en tu mazo 1 Pokémon, muéstralo y ponlo en tu mano. Después, baraja tu mazo."
		}
	}],

	attacks: [{
		name: {
			en: "Poison Powder",
			fr: "Poudre Toxik",
			de: "Giftpuder",
			es: "Polvo Veneno",
			it: "Velenpolvere",
			'es-mx': "Polvo Venenoso"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907614,
				tcgplayer: 716442
			}
		}
	],
}

export default card