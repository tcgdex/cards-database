import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [410],
	set: Set,

	name: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier",
		'es-es': "Shieldon",
		'it-it': "Shieldon",
		'pt-br': "Shieldon",
		'de-de': "Schilterus"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
		'es-es': "Fósil Desconocido",
		'it-it': "Fossile Sconosciuto",
		'pt-br': "Fóssil Não Identificado",
		'de-de': "Unbekanntes Fossil"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Hard Headbutt",
			'fr-fr': "Coup d'Boule Dur",
			'es-es': "Cabezazo Duro",
			'it-it': "Duro Bottintesta",
			'pt-br': "Cabeçada Dura",
			'de-de': "Harte Kopfnuss"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Confront",
			'fr-fr': "Confrontation",
			'es-es': "Confrontar",
			'it-it': "Confronto",
			'pt-br': "Confrontar",
			'de-de': "Konfrontieren"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Although its fossils can be found in layers of primeval rock, nothing but its face has ever been discovered.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658770,
				tcgplayer: 272324
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658770,
				tcgplayer: 272324
			}
		},
	],
}

export default card
