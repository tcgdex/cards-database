import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [542],
	set: Set,

	name: {
		en: "Leavanny",
		fr: "Manternel",
		es: "Leavanny",
		it: "Leavanny",
		pt: "Leavanny",
		de: "Matrifol"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
		es: "Swadloon",
		it: "Swadloon",
		pt: "Swadloon",
		de: "Folikon"
	},

	stage: "Stage2",
	retreat: 1,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		en: "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Healing Circle",
			fr: "Cercle de Soin",
			de: "Heilender Kreis",
			es: "Círculo Curativo",
			pt: "Círculo da Cura",
			it: "Cerchiocura"
		},

		effect: {
			en: "Heal all damage from each of your Benched Pokémon. If you healed any damage in this way, shuffle this Pokémon and all attached cards into your deck.",
			fr: "Soignez tous les dégâts de chacun de vos Pokémon de Banc. Si des dégâts sont ainsi soignés, mélangez dans votre deck ce Pokémon et toutes les cartes attachées.",
			de: "Heile allen Schaden bei jedem Pokémon auf deiner Bank. Wenn du auf diese Weise Schaden geheilt hast, mische dieses Pokémon und alle angelegten Karten in dein Deck.",
			es: "Cura todos los puntos de daño a cada uno de tus Pokémon en Banca. Si has curado algún punto de daño de esta manera, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			pt: "Cure todo o dano de cada um dos seus Pokémon no Banco. Se você curou qualquer dano desta forma, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			it: "Cura ciascuno dei tuoi Pokémon in panchina da tutti i danni. Se hai curato dei danni in questo modo, rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
			de: "Rasierblatt",
			es: "Hoja Afilada",
			pt: "Folha Navalha",
			it: "Foglielama"
		},

		damage: 120
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582039
	}
}

export default card