import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Centiskorch VMAX",
		fr: "Scolocendre VMAX",
		es: "Centiskorch VMAX",
		it: "Centiskorch VMAX",
		pt: "Centiskorch VMAX",
		de: "Infernopod VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	set: Set,
	hp: 320,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Centiskorch V",
		fr: "Scolocendre-V",
		es: "Centiskorch V",
		it: "Centiskorch-V",
		pt: "Centiskorch V",
		de: "Infernopod-V"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "G-Max Centiferno",
				fr: "Combustion G-Max",
				es: "Gigacienfuegos",
				it: "Gigamillefiamme",
				pt: "Centiferno G-Max",
				de: "Giga-Feuerkessel"
			},
			effect: {
				en: "This attack does 40 more damage for each Fire Energy attached to this Pokémon. If you did any damage with this attack, you may attach a Fire Energy card from your discard pile to this Pokémon.",
				fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Fire attachée à ce Pokémon. Si vous avez infligé des dégâts avec cette attaque, vous pouvez attacher une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
				es: "Este ataque hace 40 puntos de daño más por cada Energía Fire unida a este Pokémon. Si has infligido daño con este ataque, puedes unir 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
				it: "Questo attacco infligge 40 danni in più per ogni Energia Fire assegnata a questo Pokémon. Sei hai inflitto dei danni con questo attacco, puoi assegnare a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				pt: "Este ataque causa 40 pontos de dano a mais para cada Energia Fire ligada a este Pokémon. Se tiver causado qualquer dano com este ataque, você poderá ligar 1 carta de Energia Fire da sua pilha de descarte a este Pokémon.",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Fire-Energie 40 Schadenspunkte mehr zu. Wenn du mit dieser Attacke Schaden zugefügt hast, kannst du 1 Fire-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 483044,
		tcgplayer: 219250
	}
}

export default card
