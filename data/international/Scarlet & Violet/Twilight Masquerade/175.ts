import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [489],
	set: Set,

	name: {
		'en-us': "Phione",
		'fr-fr': "Phione",
		'es-es': "Phione",
		'it-it': "Phione",
		'pt-br': "Phione",
		'de-de': "Phione"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Beckon",
			'fr-fr': "Invite",
			'es-es': "Hacer Señas",
			'it-it': "Appello",
			'pt-br': "Aceno",
			'de-de': "Herbeiwinken"
		},

		effect: {
			'en-us': "Put a Supporter card from your discard pile into your hand.",
			'fr-fr': "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
			'es-es': "Pon 1 carta de Partidario de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma carta de Apoiador da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Energy Press",
			'fr-fr': "Pression Énergétique",
			'es-es': "Presión Energética",
			'it-it': "Energipressa",
			'pt-br': "Aperto de Energia",
			'de-de': "Energiedruck"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "When the water warms, they inflate the flotation sac on their heads and drift languidly on the sea in packs.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769349,
				tcgplayer: 550219
			}
		},
	],

	illustrator: "takashi shiraishi",

}

export default card