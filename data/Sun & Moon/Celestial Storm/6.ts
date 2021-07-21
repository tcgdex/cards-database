import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Ariados",
		fr: "Migalos",
		es: "Ariados",
		it: "Ariados",
		pt: "Ariados",
		de: "Ariados"
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
		en: "Spinarak",
		fr: "Mimigal",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Reactive Poison",
				fr: "Poison Réactif",
				es: "Veneno Reactivo",
				it: "Reattiveleno",
				pt: "Veneno Reativo",
				de: "Reaktives Gift"
			},
			effect: {
				en: "This attack does 50 more damage for each Special Condition affecting your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 50 puntos de daño más por cada Condición Especial que le afecte al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 50 danni in più per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 50 pontos de dano a mais para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der Speziellen Zustände zu, von denen das Aktive Pokémon deines Gegners betroffen ist."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spider Trap",
				fr: "Piège d’Araignée",
				es: "Trampa Araña",
				it: "Trappola del Ragno",
				pt: "Aracno-armadilha",
				de: "Spinnenfalle"
			},
			effect: {
				en: "You may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. Your opponent’s Active Pokémon is now Asleep and Poisoned.",
				fr: "Vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
				es: "Puedes cambiar 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				it: "Puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				pt: "Você pode trocar 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				de: "Du kannst 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen. Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
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



}

export default card
