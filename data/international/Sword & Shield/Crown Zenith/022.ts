import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [514],
	set: Set,

	name: {
		'en-us': "Simisear V",
		'fr-fr': "Flamoutan V",
		'es-es': "Simisear V",
		'it-it': "Simisear V",
		'pt-br': "Simisear V",
		'de-de': "Grillchita V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Bursting Power",
			'fr-fr': "Puissance Explosive",
			'es-es': "Poder Explosivo",
			'it-it': "Potere Ustionante",
			'pt-br': "Poder Explosivo",
			'de-de': "Auflodernde Macht"
		},

		effect: {
			'en-us': "You may attach up to 2 basic Energy cards from your hand to your Pokémon in any way you like.",
			'fr-fr': "Vous pouvez attacher jusqu'à 2 cartes Énergie de base de votre main à vos Pokémon comme il vous plaît.",
			'es-es': "Puedes unir hasta 2 cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Puoi assegnare ai tuoi Pokémon fino a due carte Energia base dalla tua mano nel modo che preferisci.",
			'pt-br': "Você pode ligar até 2 cartas de Energia básica da sua mão aos seus Pokémon como desejar.",
			'de-de': "Du kannst bis zu 2 Basis-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen."
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flare Juggling",
			'fr-fr': "Jonglage Enflammé",
			'es-es': "Fuegos Malabares",
			'it-it': "Giocoleria Fiammeggiante",
			'pt-br': "Malabarismo de Chamas",
			'de-de': "Flammen-Jongleur"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691739,
				tcgplayer: 478102
			}
		},
	],
}

export default card
