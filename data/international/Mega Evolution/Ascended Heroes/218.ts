import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Erika's Tangela",
		'fr-fr': "Saquedeneu d'Erika",
		'es-es': "Tangela de Erika",
		'es-mx': "Tangela de Erika",
		'de-de': "Erikas Tangela",
		'it-it': "Tangela di Erika",
		'pt-br': "Tangela da Érica"
	},

	illustrator: "buchi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Gathering of Blossoms",
			'fr-fr': "Rassemblement de Fleurs",
			'es-es': "Recolección de Flores",
			'es-mx': "Reunión Floral",
			'de-de': "Blütentreffen",
			'it-it': "Raduno di Boccioli",
			'pt-br': "Reunião Floral"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Search your deck for an Erika's Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Cherchez dans votre deck un Pokémon d'Erika, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Busca en tu baraja 1 Pokémon de Erika, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Busca en tu mazo 1 Pokémon de Erika, muéstralo y ponlo en tu mano. Después, baraja tu mazo.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Erikas Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Cerca nel tuo mazzo un Pokémon di Erika, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Procure por um Pokémon da Érica no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Bind",
			'fr-fr': "Étreinte",
			'es-es': "Atadura",
			'es-mx': "Atadura",
			'de-de': "Klammergriff",
			'it-it': "Legatutto",
			'pt-br': "Ligação"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	description: {
		'en-us': "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869829,
				tcgplayer: 676030
			}
		}
	],
}

export default card
