import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cheryl",
		'fr-fr': "Sara",
		'es-es': "Malta",
		'it-it': "Demetra",
		'pt-br': "Cheryl",
		'de-de': "Raissa"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Heal all damage from each of your Evolution Pokémon. If you do, discard all Energy from the Pokémon that were healed in this way.",
		'fr-fr': "Soignez tous les dégâts de chacun de vos Pokémon Évolutifs. Dans ce cas, défaussez toute l'Énergie des Pokémon soignés de cette façon.",
		'es-es': "Cura todos los puntos de daño a cada uno de tus Pokémon Evolución. Si lo haces, descarta todas las Energías de los Pokémon que hayas curado de esta manera.",
		'it-it': "Cura ciascuno dei tuoi Pokémon Evoluzione da tutti i danni. Se lo fai, scarta tutte le Energie dai Pokémon che hai curato in questo modo.",
		'pt-br': "Cure todo o dano de cada um dos seus Pokémon de Evolução. Se fizer isto, descarte todas as Energias dos Pokémon que foram curados desta forma.",
		'de-de': "Heile allen Schaden bei jedem deiner Entwicklungs-Pokémon. Wenn du das machst, lege alle Energien von den auf diese Weise geheilten Pokémon auf deinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545826,
				tcgplayer: 234115
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545826,
				tcgplayer: 234115
			}
		},
	],
}

export default card
