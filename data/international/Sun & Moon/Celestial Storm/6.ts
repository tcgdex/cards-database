import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'es-es': "Ariados",
		'it-it': "Ariados",
		'pt-br': "Ariados",
		'de-de': "Ariados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		168,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Reactive Poison",
				'fr-fr': "Poison Réactif",
				'es-es': "Veneno Reactivo",
				'it-it': "Reattiveleno",
				'pt-br': "Veneno Reativo",
				'de-de': "Reaktives Gift"
			},
			effect: {
				'en-us': "This attack does 50 more damage for each Special Condition affecting your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 50 puntos de daño más por cada Condición Especial que le afecte al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 50 danni in più per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der Speziellen Zustände zu, von denen das Aktive Pokémon deines Gegners betroffen ist."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spider Trap",
				'fr-fr': "Piège d’Araignée",
				'es-es': "Trampa Araña",
				'it-it': "Trappola del Ragno",
				'pt-br': "Aracno-armadilha",
				'de-de': "Spinnenfalle"
			},
			effect: {
				'en-us': "You may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. Your opponent’s Active Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
				'es-es': "Puedes cambiar 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				'it-it': "Puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				'pt-br': "Você pode trocar 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				'de-de': "Du kannst 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen. Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It spins thread from both its rear and its mouth. Then it wraps its prey up in thread and sips their bodily fluids at its leisure.",
	},

	thirdParty: {
		cardmarket: 361253,
		tcgplayer: 170812
	}
}

export default card
