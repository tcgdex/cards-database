import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Pokémon Catcher",
		fr: "Attrape-Pokémon",
		es: "Capturapokémon",
		it: "Acchiappa-Pokémon",
		pt: "Pegador de Pokémon",
		de: "Pokémon-Fänger"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez le Pokémon Actif de votre adversaire avec 1 de ses Pokémon de Banc.",
		en: "Flip a coin. If heads, switch 1 of your opponent’s Benched Pokémon with his or her Active Pokémon.",
		es: "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
		it: "Lancia una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
		pt: "Jogue uma moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
		de: "Wirf 1 Münze. Bei „Kopf“ kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281104
	}
}

export default card
