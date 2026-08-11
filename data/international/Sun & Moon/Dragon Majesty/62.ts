import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Switch Raft",
		fr: "Bouée d’Échange",
		es: "Cambio Salvavidas",
		it: "Ciambella di Scambio",
		pt: "Boia de Substituição",
		de: "Rettungsring"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez votre Pokémon Actif Water avec l’un de vos Pokémon de Banc. Dans ce cas, soignez 30 dégâts au Pokémon que vous avez déplacé vers votre Banc.",
		en: "Switch your Active Water Pokémon with 1 of your Benched Pokémon. If you do, heal 30 damage from the Pokémon you moved to your Bench.",
		es: "Cambia tu Pokémon Water Activo por 1 de tus Pokémon en Banca. Si lo haces, cura 30 puntos de daño al Pokémon que has movido a tu Banca.",
		it: "Scambia il tuo Pokémon attivo Water con uno dei tuoi Pokémon in panchina. Se lo fai, cura il Pokémon che hai spostato in panchina da 30 danni.",
		pt: "Troque o seu Pokémon Water Ativo por 1 dos seus Pokémon no Banco. Se fizer isto, cure 30 pontos de dano do Pokémon que você moveu para o seu Banco.",
		de: "Tausche dein Aktives Water-Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, heile 30 Schadenspunkte bei dem Pokémon, das du auf deine Bank verschoben hast."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 363533,
		tcgplayer: 175492
	}
}

export default card
