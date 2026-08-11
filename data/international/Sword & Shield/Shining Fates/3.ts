import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		'fr-fr': "Celebi",
		'en-us': "Celebi",
		'es-es': "Celebi",
		'it-it': "Celebi",
		'pt-br': "Celebi",
		'de-de': "Celebi"
	},

	illustrator: "Yuu Nishida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Promenade Sylvestre",
			'en-us': "Woodland Stroll",
			'es-es': "Paseo por el Bosque",
			'it-it': "Passeggiata nel Bosco",
			'pt-br': "Passeio no Bosque",
			'de-de': "Waldspaziergang"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 6 cartes du dessus de votre deck, montrer une carte Énergie que vous y trouvez, puis l'ajouter à votre main. Mélangez les autres cartes avec votre deck.",
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck, reveal an Energy card you find there, and put it into your hand. Shuffle the other cards back into your deck.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar las 6 primeras cartas de tu baraja, enseñar 1 carta de Energía que encuentres entre ellau y ponerla en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare le prime sei carte del tuo mazzo, mostrare una carta Energia presente tra esse e aggiungerla alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar as 6 cartas de cima do seu baralho, revelar 1 carta de Energia que encontrar lá e colocá-la na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dir die obersten 6 Karten deines Decks anschauen, 1 Energiekarte, die du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Enjambée de Feuillage",
			'en-us': "Leaf Step",
			'es-es': "Paso Hoja",
			'it-it': "Passofoglia",
			'pt-br': "Passo de Folha",
			'de-de': "Blattschritt"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It has the power to travel across time, but it is said to appear only in peaceful times."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539038,
				tcgplayer: 232352
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539038,
				tcgplayer: 232352
			}
		},
	],
}

export default card
