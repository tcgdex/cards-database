import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Persian",
		fr: "Persian",
		es: "Persian",
		it: "Persian",
		pt: "Persian",
		de: "Snobilikat"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Gathering of Cats",
			fr: "Rassemblement de Chats",
			es: "Reunión de Gatos",
			it: "Raduno Felino",
			pt: "Reunião de Gatos",
			de: "Katzentreffen"
		},

		effect: {
			en: "Ignore all Energy in the attack costs of each of your Pokémon in play that has the Caturday attack.",
			fr: "Ignorez toutes les Énergies dans le coût d’attaque de vos Pokémon en jeu qui ont l’attaque Chamedi.",
			es: "Ignora todas las Energías en los costes de los ataques de cada uno de tus Pokémon en juego que tenga el ataque Sábado Gatuno.",
			it: "Ignora tutte le Energie necessarie per usare gli attacchi dei tuoi Pokémon in gioco che hanno l’attacco Giornogatto.",
			pt: "Ignore todas as Energias nos custos dos ataques de cada um dos seus Pokémon em jogo que tiver o ataque Dia de Gato.",
			de: "Ignoriere alle Energien in den Kosten der Attacken jedes deiner Pokémon im Spiel, das die Attacke Schnurrtag hat."
		}
	}],

	attacks: [{
		name: {
			en: "Claw Slash",
			fr: "Tranch’Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0
}

export default card