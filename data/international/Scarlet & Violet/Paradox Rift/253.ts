import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [334],
	set: Set,

	name: {
		'en-us': "Altaria ex",
		'fr-fr': "Altaria-ex",
		'es-es': "Altaria ex",
		'it-it': "Altaria-ex",
		'pt-br': "Altaria ex",
		'de-de': "Altaria-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Humming Heal",
			'fr-fr': "Soin Fredonnant",
			'es-es': "Curación Cantarina",
			'it-it': "Cura Canterina",
			'pt-br': "Canto da Cura",
			'de-de': "Heilendes Gesumme"
		},

		effect: {
			'en-us': "Once during your turn, you may heal 20 damage from each of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon.",
			'es-es': "Una vez durante tu turno, puedes curar 20 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon da 20 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano de cada um dos seus Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 20 Schadenspunkte bei jedem deiner Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			'en-us': "Light Pulse",
			'fr-fr': "Vibrumineuse",
			'es-es': "Pulso Luminoso",
			'it-it': "Lucepulsar",
			'pt-br': "Pulso de Luz",
			'de-de': "Sanfte Welle"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			'es-es': "Durante el próximo turno de tu rival, se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario. I danni non sono un effetto.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners alle Effekte der von den Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		},

		damage: 140
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740796,
				tcgplayer: 523934,
				cardtrader: 265325
			}
		},
	],

	suffix: "ex",
	illustrator: "Jiro Sasumo",

	
}

export default card
