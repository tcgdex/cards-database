import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [464],
	set: Set,

	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
		es: "Rhyperior",
		it: "Rhyperior",
		pt: "Rhyperior",
		de: "Rihornior"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],
	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wide Wall",
			fr: "Mur Large",
			es: "Muro Ancho",
			it: "Grande Muro",
			pt: "Paredão",
			de: "Breiter Wall"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to all of your Pokémon.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte infligés à tous vos Pokémon.",
			es: "Mientras este Pokémon esté en el Puesto Activo, cada vez que tu rival juegue una carta de Partidario de su mano, se evitan todos los efectos de esa carta infligidos a cada uno de tus Pokémon.",
			it: "Fintanto che questo Pokémon è in posizione attiva, ogni volta che il tuo avversario gioca una carta Aiuto dalla sua mano, previeni tutti gli effetti di quella carta sui tuoi Pokémon.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, sempre que seu oponente jogar uma carta de Apoiador da mão dele, previna todos os efeitos daquela carta causados a todos os seus Pokémon.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, verhindere jedes Mal, wenn dein Gegner 1 Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die allen deinen Pokémon zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Drill Run",
			fr: "Tunnelier",
			es: "Taladradora",
			it: "Giravvita",
			pt: "Furação",
			de: "Schlagbohrer"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Mitsuhiro Arita",

	thirdParty: {
		cardmarket: 785930
	}
}

export default card
