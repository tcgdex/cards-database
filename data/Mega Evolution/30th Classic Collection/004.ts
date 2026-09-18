import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Genesect EX",
		fr: "Genesect EX",
		de: "Genesect EX",
		es: "Genesect EX",
		it: "Genesect EX",
		pt: "Genesect EX",
		'es-mx': "Genesect EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Red Signal",
			fr: "Signal Rouge",
			de: "Signalstufe Rot",
			es: "Señal Roja",
			it: "Allarmerosso",
			pt: "Sinal Vermelho",
			'es-mx': "Señal Roja"
		},

		effect: {
			en: "When you attach a Plasma Energy from your hand to this Pokémon, you may switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
			fr: "Lorsque vous attachez une Énergie Plasma de votre main à ce Pokémon, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			de: "Wenn du 1 Plasma-Energie von deiner Hand an dieses Pokémon anlegst, kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen.",
			es: "Cuando unas una Energía Plasma de tu mano a este Pokémon, puedes cambiar a 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			it: "Quando assegni un'Energia Plasma dalla tua mano a questo Pokémon, puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			pt: "Ao ligar uma Energia de Plasma da sua mão a este Pokémon, você pode trocar 1 dos Pokémon do Banco do oponente pelo Pokémon Ativo dele.",
			'es-mx': "Cuando unas 1 Energía Plasma de tu mano a este Pokémon, puedes cambiar a 1 de los Pokémon en Banca de tu rival por su Pokémon Activo."
		}
	}],

	attacks: [{
		name: {
			en: "Megalo Cannon",
			fr: "Mégalo Canon",
			de: "Kolossalkanone",
			es: "Megalocañón",
			it: "Megalocannone",
			pt: "Megalocanhão",
			'es-mx': "Megalocañón"
		},

		effect: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. <em>	   (Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia para los Pokémon en Banca.)</em>",
			it: "Infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario. <em>Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			pt: "Causa 20 de dano a 1 dos Pokémon no Banco do seu oponente. <em>(Não aplique Fraqueza e Resistência a Pokémon no Banco.)</em>",
			'es-mx': "Hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia para los Pokémon en Banca.)</em>"
		},

		damage: 100,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907958,
				tcgplayer: 716158
			}
		}
	],
}

export default card