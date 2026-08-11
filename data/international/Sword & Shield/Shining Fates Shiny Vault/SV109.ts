import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		'fr-fr': "Scolocendre VMAX",
		'en-us': "Centiskorch VMAX",
		'es-es': "Centiskorch VMAX",
		'it-it': "Centiskorch VMAX",
		'pt-br': "Centiskorch VMAX",
		'de-de': "Infernopod VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Scolocendre-V",
		'en-us': "Centiskorch V"
	},

	attacks: [{
		name: {
			'fr-fr': "Combustion G-Max",
			'en-us': "G-Max Centiferno",
			'es-es': "Gigacienfuegos",
			'it-it': "Gigamillefiamme",
			'pt-br': "Centiferno G-Max",
			'de-de': "Giga-Feuerkessel"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Fire attachée à ce Pokémon. Si vous avez infligé des dégâts avec cette attaque, vous pouvez attacher une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
			'en-us': "This attack does 40 more damage for each Fire Energy attached to this Pokémon. If you did any damage with this attack, you may attach a Fire Energy card from your discard pile to this Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía Fire unida a este Pokémon. Si has infligido daño con este ataque, puedes unir 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia Fire assegnata a questo Pokémon. Sei hai inflitto dei danni con questo attacco, puoi assegnare a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia Fire ligada a este Pokémon. Se tiver causado qualquer dano com este ataque, você poderá ligar 1 carta de Energia Fire da sua pilha de descarte a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Fire-Energie 40 Schadenspunkte mehr zu. Wenn du mit dieser Attacke Schaden zugefügt hast, kannst du 1 Fire-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen."
		},

		damage: "40+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539933,
				tcgplayer: 232500
			}
		},
	],
}

export default card
