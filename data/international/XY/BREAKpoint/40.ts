import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Greninja",
		'fr-fr': "Amphinobi",
		'es-es': "Greninja",
		'it-it': "Greninja",
		'pt-br': "Greninja",
		'de-de': "Quajutsu"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
		'es-es': "Frogadier",
		'it-it': "Frogadier",
		'pt-br': "Frogadier",
		'de-de': "Amphizel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Shadow Stitching",
				'fr-fr': "Ombre Suture",
				'es-es': "Puntadas Sombrías",
				'it-it': "Cucitura d'Ombra",
				'pt-br': "Costura Sombria",
				'de-de': "Schattensticken"
			},
			effect: {
				'en-us': "Until the end of your opponent's next turn, each Pokémon your opponent has in play, in his or her hand, and in his or her discard pile has no Abilities. (This includes cards that come into play on that turn.)",
				'fr-fr': "Jusqu'à la fin du prochain tour de votre adversaire, chacun des Pokémon de votre adversaire en jeu, dans sa main et dans sa pile de défausse, n'a pas de talent. (Cela comprend les cartes qui sont en jeu pendant ce tour.)",
				'es-es': "Hasta el final del próximo turno de tu rival, los Pokémon en juego de tu rival, en su mano y en su pila de descartes no tienen ninguna habilidad. (Esto incluye cartas que entran en juego durante ese turno).",
				'it-it': "Fino alla fine del prossimo turno del tuo avversario, le abilità dei Pokémon in gioco del tuo avversario, nella sua mano o nella sua pila degli scarti non hanno più effetto (incluse quelle delle carte entrate in gioco in quel turno).",
				'pt-br': "Até o final da próxima vez de jogar do seu oponente, todos os Pokémon que o seu oponente tiver em jogo, na mão e na pilha de descarte, não possuem Habilidades. (Isso inclui os cards que entram em jogo naquela rodada).",
				'de-de': "Bis zum Ende des nächsten Zuges deines Gegners hat jedes gegnerische Pokémon im Spiel, auf seiner Hand und in seinem Ablagestapel keine Fähigkeiten. (Dazu gehören Karten, die während des Zuges ins Spiel kommen.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Moonlight Slash",
				'fr-fr': "Tranch'Lune",
				'es-es': "Cuchillada Luz Lunar",
				'it-it': "Lame Siderali",
				'pt-br': "Talho de Luar",
				'de-de': "Mondscheinschlitzer"
			},
			effect: {
				'en-us': "You may return a Water Energy from this Pokémon to your hand. If you do, this attack does 20 more damage.",
				'fr-fr': "Vous pouvez reprendre une Énergie Water de ce Pokémon dans votre main. Dans ce cas, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Puedes devolver 1 Energía Water de este Pokémon a tu mano. Si lo haces, este ataque hace 20 puntos de daño más.",
				'it-it': "Puoi riprendere in mano un'Energia Water assegnata a questo Pokémon. Se lo fai, questo attacco infligge 20 danni in più.",
				'pt-br': "Você pode retornar uma Energia Water deste Pokémon para a sua mão. Se fizer isso, este ataque causará 20 de danos adicionais.",
				'de-de': "Du kannst 1 Water-Energie von diesem Pokémon zurück auf deine Hand nehmen. Wenn du das machst, fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It appears and vanishes with a ninja's grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.",
	},

	thirdParty: {
		cardmarket: 288215,
		tcgplayer: 111547
	}
}

export default card
