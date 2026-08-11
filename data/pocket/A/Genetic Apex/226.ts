import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lt. Surge",
		'fr-fr': "Major Bob",
		'es-es': "Teniente Surge",
		'it-it': "Lt. Surge",
		'de-de': "Major Bob",
		'pt-br': "Ten. Surge",
		'ko-kr': "마티스"
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		'en-us': "Move all {L} Energy from your Benched Pokémon to your Raichu, Electrode, or Electabuzz in the Active Spot.",
		'fr-fr': "Déplacez toutes les Énergies {L} de vos Pokémon de Banc vers Raichu, Électrode ou Élektek sur le Poste Actif.",
		'es-es': "Mueve todas las Energías {L} de tus Pokémon en Banca a tu Raichu, tu Electrode o tu Electabuzz en el Puesto Activo.",
		'it-it': "Sposta tutte le Energie {L} dai tuoi Pokémon in panchina al tuo Raichu, Electrode oppure Electabuzz in posizione attiva.",
		'de-de': "Verschiebe alle {L}-Energien von Pokémon auf deiner Bank auf dein Raichu, Lektrobal oder Elektek in der Aktiven Position.",
		'pt-br': "Mova todas as Energias {L} dos seus Pokémon no Banco para seu Raichu, Electrode ou Electabuzz no Campo Ativo.",
		'ko-kr': "자신의 배틀필드의 「라이츄」「붐볼」「에레브」에게 벤치 포켓몬 전원으로부터 {L}에너지를 모두 붙인다."
	},

	trainerType: "Supporter",
	rarity: "Two Diamond",
	boosters: ["pikachu"]
}

export default card
