import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Proton",
		'fr-fr': "Lance de la Team Rocket",
		'es-es': "Protón del Team Rocket",
		'es-mx': "Protón del Equipo Rocket",
		'de-de': "Team Rockets Lance",
		'it-it': "Milas del Team Rocket",
		'pt-br': "Próton da Equipe Rocket"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If you go first, you may use this card during your first turn.\n\nSearch your deck for up to 3 Basic Team Rocket's Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette carte pendant votre premier tour.\n\nCherchez dans votre deck jusqu'à 3 Pokémon de la Team Rocket de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Si sales en primer lugar, puedes usar esta carta durante tu primer turno.\n\nBusca en tu baraja hasta 3 Pokémon del Team Rocket Básicos, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		'es-mx': "Si sales en primer lugar, puedes usar esta carta durante tu primer turno.\n\nBusca en tu mazo hasta 3 Pokémon del Equipo Rocket Básicos, muéstralos y ponlos en tu mano. Después, baraja las cartas de tu mazo.",
		'de-de': "Wenn du als Erster am Zug bist, kannst du diese Karte während deines ersten Zuges einsetzen.\n\nDurchsuche dein Deck nach bis zu 3 Basis-Team-Rockets-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		'it-it': "Se inizi per primo, puoi usare questa carta durante il tuo primo turno.\n\nCerca nel tuo mazzo fino a tre Pokémon del Team Rocket Base, mostrali e aggiungili alle carte che hai in mano. Poi rimischia\nle carte del tuo mazzo.",
		'pt-br': "Se você for o primeiro a jogar, poderá usar esta carta durante o seu primeiro turno.\n\nProcure por até 3 Pokémon da Equipe Rocket Básicos no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869819,
			tcgplayer: 676020
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869819,
			tcgplayer: 676020
		}
	}
],
}

export default card