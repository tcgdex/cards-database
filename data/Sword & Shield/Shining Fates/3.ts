import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Celebi",
		en: "Celebi",
		es: "Celebi",
		it: "Celebi",
		pt: "Celebi",
		de: "Celebi"
	},

	illustrator: "Yuu Nishida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Promenade Sylvestre",
			en: "Woodland Stroll",
			es: "Paseo por el Bosque",
			it: "Passeggiata nel Bosco",
			pt: "Passeio no Bosque",
			de: "Waldspaziergang"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 6 cartes du dessus de votre deck, montrer une carte Énergie que vous y trouvez, puis l'ajouter à votre main. Mélangez les autres cartes avec votre deck.",
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck, reveal an Energy card you find there, and put it into your hand. Shuffle the other cards back into your deck.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar las 6 primeras cartas de tu baraja, enseñar 1 carta de Energía que encuentres entre ellau y ponerla en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare le prime sei carte del tuo mazzo, mostrare una carta Energia presente tra esse e aggiungerla alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar as 6 cartas de cima do seu baralho, revelar 1 carta de Energia que encontrar lá e colocá-la na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dir die obersten 6 Karten deines Decks anschauen, 1 Energiekarte, die du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Enjambée de Feuillage",
			en: "Leaf Step",
			es: "Paso Hoja",
			it: "Passofoglia",
			pt: "Passo de Folha",
			de: "Blattschritt"
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It has the power to travel across time, but it is said to appear only in peaceful times."
	}
}

export default card
