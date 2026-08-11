import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [542],
	set: Set,

	name: {
		'en-us': "Leavanny",
		'fr-fr': "Manternel",
		'es-es': "Leavanny",
		'it-it': "Leavanny",
		'pt-br': "Leavanny",
		'de-de': "Matrifol"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
		'es-es': "Swadloon",
		'it-it': "Swadloon",
		'pt-br': "Swadloon",
		'de-de': "Folikon"
	},

	stage: "Stage2",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		'en-us': "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Healing Circle",
			'fr-fr': "Cercle de Soin",
			'de-de': "Heilender Kreis",
			'es-es': "Círculo Curativo",
			'pt-br': "Círculo da Cura",
			'it-it': "Cerchiocura"
		},

		effect: {
			'en-us': "Heal all damage from each of your Benched Pokémon. If you healed any damage in this way, shuffle this Pokémon and all attached cards into your deck.",
			'fr-fr': "Soignez tous les dégâts de chacun de vos Pokémon de Banc. Si des dégâts sont ainsi soignés, mélangez dans votre deck ce Pokémon et toutes les cartes attachées.",
			'de-de': "Heile allen Schaden bei jedem Pokémon auf deiner Bank. Wenn du auf diese Weise Schaden geheilt hast, mische dieses Pokémon und alle angelegten Karten in dein Deck.",
			'es-es': "Cura todos los puntos de daño a cada uno de tus Pokémon en Banca. Si has curado algún punto de daño de esta manera, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'pt-br': "Cure todo o dano de cada um dos seus Pokémon no Banco. Se você curou qualquer dano desta forma, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			'it-it': "Cura ciascuno dei tuoi Pokémon in panchina da tutti i danni. Se hai curato dei danni in questo modo, rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'de-de': "Rasierblatt",
			'es-es': "Hoja Afilada",
			'pt-br': "Folha Navalha",
			'it-it': "Foglielama"
		},

		damage: 120
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582039,
				tcgplayer: 253081
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582039,
				tcgplayer: 253081
			}
		},
	],
}

export default card
