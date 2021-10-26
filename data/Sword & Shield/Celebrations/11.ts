import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Mew",
		fr: "Mew",
		es: "Mew",
		it: "Mew",
		pt: "Mew",
		de: "Mew"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Yuu Nishida",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mysterious Tail",
			fr: "Queue Mystérieuse",
			es: "Cola Misteriosa",
			it: "Coda Misteriosa",
			pt: "Cauda Misteriosa",
			de: "Geheimnisvoller Schweif"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck, reveal an Item card you find there, and put it into your hand. Shuffle the other cards back into your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 6 cartes du dessus de votre deck, montrer une carte Objet que vous y trouvez, puis l'ajouter à votre main. Mélangez les autres cartes avec votre deck.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar las 6 primeras cartas de tu baraja, enseñar 1 carta de Objeto que encuentres entre ellas y ponerla en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare le prime sei carte del tuo mazzo, mostrare una carta Strumento presente tra esse e aggiungerla alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar as 6 cartas de cima do seu baralho, revelar 1 carta de Item que encontrar lá e colocá-la na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dir die obersten 6 Karten deines Decks anschauen, 1 Itemkarte, die du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	attacks: [{
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			es: "Disparo Psi",
			it: "Psicosparo",
			pt: "Tiro Psíquico",
			de: "Psychoschuss"
		},

		damage: "30",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card
