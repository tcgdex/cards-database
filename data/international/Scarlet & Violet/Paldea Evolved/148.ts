import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [823],
	set: Set,

	name: {
		'fr-fr': "Corvaillus",
		'en-us': "Corviknight",
		'es-es': "Corviknight",
		'it-it': "Corviknight",
		'pt-br': "Corviknight",
		'de-de': "Krarmor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],
	evolveFrom: {
		'fr-fr': "Bleuseille",
		'en-us': "Corvisquire",
		'es-es': "Corvisquire",
		'it-it': "Corvisquire",
		'pt-br': "Corvisquire",
		'de-de': "Kranoviz"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Accélérer",
			'en-us': "Accelerate",
			'es-es': "Acelerar",
			'it-it': "Accelerazione",
			'pt-br': "Aceleração",
			'de-de': "Beschleunigen"
		},

		effect: {
			'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts provenant de cette attaque, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'en-us': "If your opponent's Pokémon is Knocked Out by damage from this attack, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'es-es': "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 50
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Oiseau Torpille",
			'en-us': "Spinning Bird",
			'es-es': "Pájaro Giratorio",
			'it-it': "Giravolatile",
			'pt-br': "Ave Giratória",
			'de-de': "Vogelwirbel"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'en-us': "Discard 2 Energy from this Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715623,
				tcgplayer: 497561,
				cardtrader: 248800
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715623,
				tcgplayer: 497561,
				cardtrader: 248800
			}
		},
	],

	illustrator: "Scav",

	description: {
		'en-us': "Corviknight can't serve as a taxi service in Paldea because the Pokémon's natural predators will attack it while it flies, endangering the customer.",
	},
}

export default card
