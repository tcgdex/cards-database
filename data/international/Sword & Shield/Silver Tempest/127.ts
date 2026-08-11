import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [777],
	set: Set,

	name: {
		'en-us': "Togedemaru",
		'fr-fr': "Togedemaru",
		'es-es': "Togedemaru",
		'it-it': "Togedemaru",
		'pt-br': "Togedemaru",
		'de-de': "Togedemaru"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Toge Dash",
			'fr-fr': "Toge Ruée",
			'es-es': "Toge Carrera",
			'it-it': "Togescatto",
			'pt-br': "Arremetoge",
			'de-de': "Toge-Spurt"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, if this Pokémon is Knocked Out, your opponent can't take any Prize cards for it.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, si este Pokémon queda Fuera de Combate, tu rival no puede coger ninguna carta de Premio por ello.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, se questo Pokémon viene messo KO, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, se este Pokémon for Nocauteado, seu oponente não poderá pegar cartas de Prêmio por isto.",
			'de-de': "Wirf 1 Münze. Bei Kopf kann dein Gegner während seines nächsten Zuges, wenn dieses Pokémon kampfunfähig wird, dafür keine Preiskarten nehmen."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "With the long hairs on its back, this Pokémon takes in electricity from other electric Pokémon. It stores what it absorbs in an electric sac.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682174,
				tcgplayer: 451780
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682174,
				tcgplayer: 451780
			}
		},
	],
}

export default card
