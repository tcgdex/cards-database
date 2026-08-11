import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		'en-us': "Centiskorch VMAX",
		'fr-fr': "Scolocendre VMAX",
		'es-es': "Centiskorch VMAX",
		'it-it': "Centiskorch VMAX",
		'pt-br': "Centiskorch VMAX",
		'de-de': "Infernopod VMAX"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Centiskorch V",
		'fr-fr': "Scolocendre-V",
		'es-es': "Centiskorch V",
		'it-it': "Centiskorch-V",
		'pt-br': "Centiskorch V",
		'de-de': "Infernopod-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "G-Max Centiferno",
			'fr-fr': "Combustion G-Max",
			'es-es': "Gigacienfuegos",
			'it-it': "Gigamillefiamme",
			'pt-br': "Centiferno G-Max",
			'de-de': "Giga-Feuerkessel"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each Fire Energy attached to this Pokémon. If you did any damage with this attack, you may attach a Fire Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Fire attachée à ce Pokémon. Si vous avez infligé des dégâts avec cette attaque, vous pouvez attacher une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía Fire unida a este Pokémon. Si has infligido daño con este ataque, puedes unir 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia Fire assegnata a questo Pokémon. Sei hai inflitto dei danni con questo attacco, puoi assegnare a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia Fire ligada a este Pokémon. Se tiver causado qualquer dano com este ataque, você poderá ligar 1 carta de Energia Fire da sua pilha de descarte a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Fire-Energie 40 Schadenspunkte mehr zu. Wenn du mit dieser Attacke Schaden zugefügt hast, kannst du 1 Fire-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen."
		},

		damage: "40+"
	}],

	retreat: 3,
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674233,
				tcgplayer: 284276
			}
		},
	],
}

export default card
