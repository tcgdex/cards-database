import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Gumshoos",
		'fr-fr': "Argouste",
		'es-es': "Gumshoos",
		'it-it': "Gumshoos",
		'pt-br': "Gumshoos",
		'de-de': "Manguspektor"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		735,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Yungoos",
		'fr-fr': "Manglouton",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Alert Headbutt",
				'fr-fr': "Réveil Coup d’Boule",
				'es-es': "Cabezazo de Alerta",
				'it-it': "Testata Prudente",
				'pt-br': "Cabeçada Alerta",
				'de-de': "Warnende Kopfnuss"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Pokémon-GX or Pokémon-EX, this attack’s base damage is 30.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, les dégâts de base de cette attaque sont de 30.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, el daño básico de este ataque es de 30.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, i danni base di questo attacco sono 30.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, o dano base deste ataque será 30.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder Pokémon-EX ist, beträgt der Grundschaden dieser Attacke 30 Schadenspunkte."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Although it wasn't originally found in Alola, this Pokémon was brought over a long time ago when there was a huge Rattata outbreak.",
	},

	thirdParty: {
		cardmarket: 388692,
		tcgplayer: 195185
	}
}

export default card
