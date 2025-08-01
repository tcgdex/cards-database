import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [490],
	set: Set,

	name: {
		fr: "Manaphy",
		en: "Manaphy",
		es: "Manaphy",
		it: "Manaphy",
		pt: "Manaphy",
		de: "Manaphy"
	},

	illustrator: "Narumi Sato",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Recherche Océanique",
			en: "Ocean Search",
			es: "Búsqueda Oceánica",
			it: "Ricerca Oceanica",
			pt: "Busca Oceânica",
			de: "Ozeansuche"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 6 cartes du dessus de votre deck, montrer un Pokémon que vous y trouvez, puis l'ajouter à votre main. Mélangez les autres cartes avec votre deck.",
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck, reveal a Pokémon you find there, and put it into your hand. Shuffle the other cards back into your deck.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar las 6 primeras cartas de tu baraja, enseñar 1 Pokémon que encuentres entre ellas y ponerlo en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare le prime sei carte del tuo mazzo, mostrare un Pokémon presente tra esse e aggiungerlo alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar as 6 cartas de cima do seu baralho, revelar 1 Pokémon que encontrar lá e colocá-lo na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dir die obersten 6 Karten deines Decks anschauen, 1 Pokémon, das du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Grosse Vague",
			en: "Wave Splash",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante",
			de: "Wellenplatscher"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
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
		en: "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon."
	},

	thirdParty: {
		cardmarket: 539143,
		tcgplayer: 232424
	}
}

export default card
