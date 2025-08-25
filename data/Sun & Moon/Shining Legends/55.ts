import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Hoopa",
		fr: "Hoopa",
		es: "Hoopa",
		it: "Hoopa",
		pt: "Hoopa",
		de: "Hoopa"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		720,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scoundrel Guard",
				fr: "Protection Malicieuse",
				es: "Guardia Perversa",
				it: "Scudo Malandrino",
				pt: "Guarda Vigarista",
				de: "Spitzbubenwacht"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent’s Pokémon-GX or Pokémon-EX.",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-GX ou les Pokémon-EX de votre adversaire.",
				es: "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon-GX o Pokémon-EX de tu rival.",
				it: "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon-GX o dai Pokémon-EX del tuo avversario.",
				pt: "Previne todos os efeitos de ataques, incluindo dano, causados a este Pokémon pelos Pokémon-GX ou Pokémon-EX do seu oponente.",
				de: "Verhindere alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon durch Pokémon-GX oder Pokémon-EX deines Gegners zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super Psy",
				es: "Superrayo Psi",
				it: "Superpsico",
				pt: "Super-raio Psíquico",
				de: "Super-Psischlag"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 301166,
		tcgplayer: 146718
	}
}

export default card
