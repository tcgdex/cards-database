import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Flute",
		pt: "Flauta Pokémon",
		fr: "Flûte Pokémon",
		de: "Pokémon-Flöte"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 Basic Pokémon card from your opponent's discard pile and put it onto his or her Bench. (You can't play Pokémon Flute if your opponent's Bench is full.)",
		pt: "Escolha 1 card Pokémon Básico da pilha de descarte do seu oponente e coloque-o no Banco dele ou dela. (Você não pode jogar Flauta Pokémon se o Banco do seu oponente estiver cheio.)",
		fr: "Choisissez 1 carte Pokémon de base dans la pile de défausse de votre adversaire et placez-la sur son Banc. (Vous ne pouvez pas jouer Flûte Pokémon si le Banc de votre adversaire est plein).",
		de: "Wähle eine Basis-Pokémon-Karte vom Ablagestapel Deines Gegners und platziere sie auf seiner Bank. (Du kannst Pokémon-Flöte nicht spielen, falls die Bank Deines Gegners voll ist.)"
	}
}

export default card
