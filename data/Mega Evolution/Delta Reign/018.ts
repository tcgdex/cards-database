import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		'es-mx': "Growlithe"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Roar",
			fr: "Hurlement",
			de: "Brüller",
			es: "Rugido",
			it: "Boato",
			pt: "Rugido",
			'es-mx': "Rugido"
		},

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. <em>(Your opponent chooses the new Active Pokémon.)</em>",
			fr: "Envoyez le Pokémon Actif de votre adversaire sur le Banc. <em>(Votre adversaire choisit le nouveau Pokémon Actif.)</em>",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. <em>(Dein Gegner wählt das neue Aktive Pokémon.)</em>",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. <em>(Tu rival elige el nuevo Pokémon Activo).</em>",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. <em>Il tuo avversario sceglie il nuovo Pokémon attivo</em>.",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. <em>(O seu oponente escolhe o novo Pokémon Ativo.)</em>",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. <em>(Tu rival elige el nuevo Pokémon Activo).</em>"
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Rear Kick",
			fr: "Ruade",
			de: "Rückwärtskick",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			'es-mx': "Patada Trasera"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726516,
				cardmarket: 918832
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726516,
				cardmarket: 918832
			}
		}
	],
}

export default card