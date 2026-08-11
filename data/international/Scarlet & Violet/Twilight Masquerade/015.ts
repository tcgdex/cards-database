import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [811],
	set: Set,

	name: {
		'en-us': "Thwackey",
		'fr-fr': "Badabouin",
		'es-es': "Thwackey",
		'it-it': "Thwackey",
		'pt-br': "Thwackey",
		'de-de': "Chimstix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Grookey",
		'fr-fr': "Ouistempo",
		'es-es': "Grookey",
		'it-it': "Grookey",
		'pt-br': "Grookey",
		'de-de': "Chimpep"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Boom Boom Groove",
			'fr-fr': "Groove Boum Boum",
			'es-es': "Ritmo Bum Bum",
			'it-it': "Ritmo Bum Bum",
			'pt-br': "Batidão Ritmado",
			'de-de': "Bumm-Bumm-Groove"
		},

		effect: {
			'en-us': "Once during your turn, if your Active Pokémon has the Festival Lead Ability, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, si votre Pokémon Actif a le talent Tête de la Fête, vous pouvez chercher dans votre deck une carte, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, si tu Pokémon Activo tiene la habilidad Líder del Festival, puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, se il tuo Pokémon attivo ha l'abilità Maestro della Festa, puoi cercare nel tuo mazzo una carta e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, se o seu Pokémon Ativo tiver a Habilidade Líder de Festas, você poderá procurar por uma carta no seu baralho e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges, wenn dein Aktives Pokémon die Fähigkeit Festmeister hat, kannst du dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "The faster a Thwackey can beat out a rhythm with its two sticks, the more respect it wins from its peers.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769189,
				tcgplayer: 550059
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769189,
				tcgplayer: 550059
			}
		},
	],

	illustrator: "GOSSAN",

}

export default card