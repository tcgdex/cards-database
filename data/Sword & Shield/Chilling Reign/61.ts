import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		es: "Gardevoir",
		it: "Gardevoir",
		pt: "Gardevoir",
		de: "Guardevoir"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia",
		de: "Kirlia"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Shining Arcana",
			fr: "Arcane Brillant",
			es: "Arcano Radiante",
			it: "Arcani Lucenti",
			pt: "Arcano Brilhante",
			de: "Schimmernde Arkana"
		},

		effect: {
			en: "Once during your turn, you may look at the top 2 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Put the other cards into your hand.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 2 cartes du dessus de votre deck puis attacher le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon, comme il vous plaît. Ajoutez les autres cartes à votre main.",
			es: "Una vez durante tu turno, puedes mirar las 2 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas en tu mano.",
			it: "Una sola volta durante il tuo turno, puoi guardare le prime due carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia base presenti tra esse ai tuoi Pokémon nel modo che preferisci. Aggiungi le altre carte a quelle che hai in mano.",
			pt: "Uma vez durante o seu turno, você poderá olhar as 2 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia básica que encontrar lá aos seus Pokémon como desejar. Coloque as outras cartas na sua mão.",
			de: "Einmal während deines Zuges kannst du dir die obersten 2 Karten deines Decks anschauen und beliebig viele Basis-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Nimm die anderen Karten auf deine Hand."
		}
	}],

	attacks: [{
		name: {
			en: "Brainwave",
			fr: "Onde Cérébrale",
			es: "Onda Cerebral",
			it: "Onda Cerebrale",
			pt: "Onda Cerebral",
			de: "Gehirnwelle"
		},

		effect: {
			en: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "To protect its Trainer, it will expend all its psychic power to create a small black hole."
	}
}

export default card