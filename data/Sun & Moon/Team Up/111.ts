import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Ninetales",
		fr: "Feunard d’Alola",
		es: "Ninetales de Alola",
		it: "Ninetales di Alola",
		pt: "Ninetales de Alola",
		de: "Alola Vulnona"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Luminous Barrier",
				fr: "Barrière Lumineuse",
				es: "Barrera Luminosa",
				it: "Luminobarriera",
				pt: "Barreira Luminosa",
				de: "Klare Barriere"
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
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
				es: "Rayo Aurora",
				it: "Raggiaurora",
				pt: "Raio Aurora",
				de: "Aurorastrahl"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 369040,
		tcgplayer: 183895
	}
}

export default card
