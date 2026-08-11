import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Sabrina",
		fr: "Morgane",
		es: "Sabrina",
		it: "Sabrina",
		de: "Sabrina",
		'pt-br': "Sabrina",
		ko: "초련"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
		fr: "Échangez le Pokémon Actif de votre adversaire avec l'un de ses Pokémon de Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
		es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
		it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
		de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
		'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
		ko: "상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)"
	},

	trainerType: "Supporter",
	rarity: "Two Star",
	boosters: ["charizard"]
}

export default card
