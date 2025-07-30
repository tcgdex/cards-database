import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [35],
	set: Set,

	name: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		it: "Clefairy",
		pt: "Clefairy",
		de: "Piepi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Moon-Watching Party",
			fr: "Célébration Sélène",
			es: "Fiesta Contemplación Lunar",
			it: "Festa Lunare",
			pt: "Festejo do Luar",
			de: "Mondschauparty"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, for each of your Benched Clefairy, you may search your deck for a Psychic Energy card and attach it to that Clefairy. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, pour chacun de vos Mélofée de Banc, vous pouvez chercher dans votre deck une carte Énergie Psychic et l'attacher à ce Mélofée-là. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, por cada uno de tus Clefairy en Banca, puedes buscar en tu baraja 1 carta de Energía Psychic y unirla a ese Clefairy. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi cercare nel tuo mazzo una carta Energia Psychic per ogni Clefairy nella tua panchina e assegnarla a quel Clefairy. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, para cada Clefairy no seu Banco, você poderá procurar por 1 carta de Energia Psychic no seu baralho e ligá-la àquele Clefairy. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du für jedes Piepi auf deiner Bank dein Deck nach 1 Psychic-Energiekarte durchsuchen und sie an jenes Piepi anlegen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wonder Storm",
			fr: "Tempête Miracle",
			es: "Tormenta Asombrosa",
			it: "Tempesta Meraviglia",
			pt: "Tempestade Encantada",
			de: "Wundersturm"
		},

		effect: {
			en: "This attack does 20 damage for each Psychic Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Énergie Psychic attachée à tous vos Pokémon.",
			es: "Este ataque hace 20 puntos de daño por cada Energía Psychic unida a todos tus Pokémon.",
			it: "Questo attacco infligge 20 danni per ogni Energia Psychic assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 20 pontos de dano para cada Energia Psychic ligada a todos os seus Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Psychic-Energie 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674071
	}
}

export default card