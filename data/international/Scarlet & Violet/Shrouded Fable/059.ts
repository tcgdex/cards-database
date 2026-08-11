import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Janine's Secret Art",
		'fr-fr': "Art Secret de Jeannine",
		'es-es': "Artes Secretas de Sachiko",
		'it-it': "Arte Segreta di Nina",
		'pt-br': "Dom Secreto da Janine",
		'de-de': "Janinas Geheimkunst"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Choose up to 2 of your {D} Pokémon. For each of those Pokémon, search your deck for a Basic {D} Energy card and attach it to that Pokémon. Then, shuffle your deck. If you attached Energy to your Active Pokémon in this way, it is now Poisoned.",
		'fr-fr': "Choisissez jusqu'à 2 de vos Pokémon {D}. Pour chacun de ces Pokémon, cherchez dans votre deck une carte Énergie {D} de base, puis attachez-la à ce Pokémon-là. Mélangez ensuite votre deck. Si vous avez attaché de l'Énergie à votre Pokémon Actif de cette façon, celui-ci est maintenant Empoisonné.",
		'es-es': "Elige hasta 2 de tus Pokémon {D}. Para cada uno de esos Pokémon, busca en tu baraja 1 carta de Energía {D} Básica y únela a ese Pokémon. Después, baraja las cartas de tu baraja. Si has unido Energía a tu Pokémon Activo de esta manera, pasa a estar Envenenado.",
		'it-it': "Scegli fino a due dei tuoi Pokémon {D}. Per ognuno di essi, cerca nel tuo mazzo una carta Energia base {D} e assegnala a quel Pokémon. Poi rimischia le carte del tuo mazzo. Se hai assegnato dell'Energia al tuo Pokémon attivo in questo modo, esso viene avvelenato.",
		'pt-br': "Escolha até 2 dos seus Pokémon {D}. Para cada um daqueles Pokémon, procure por uma carta de Energia {D} Básica no seu baralho e ligue-a àquele Pokémon. Em seguida, embaralhe o seu baralho. Se você ligou Energia ao seu Pokémon Ativo desta forma, ele agora estará Envenenado.",
		'de-de': "Wähle bis zu 2 deiner {D}-Pokémon. Durchsuche für jedes jener Pokémon dein Deck nach 1 Basis-{D}-Energiekarte und lege sie an jenes Pokémon an. Mische anschließend dein Deck. Wenn du auf diese Weise Energie an dein Aktives Pokémon angelegt hast, ist es jetzt vergiftet."
	},

	trainerType: "Supporter",
	regulationMark: "H",


	illustrator: "Taira Akitsu",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780955,
				tcgplayer: 560370
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780955,
				tcgplayer: 560370
			}
		},
	],
}

export default card
