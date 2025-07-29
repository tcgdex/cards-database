import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
		es: "Porygon-Z",
		it: "Porygon-Z",
		pt: "Porygon-Z",
		de: "Porygon-Z"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
		es: "Porygon2",
		it: "Porygon2",
		pt: "Porygon2",
		de: "Porygon2"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Digital Reboot",
				fr: "Redémarrage Numérique",
				es: "Reinicio Digital",
				it: "Riavvio Digitale",
				pt: "Reinicialização Digital",
				de: "Digitaler Neustart"
			},
			effect: {
				en: "Devolve as many of your Benched Pokémon as many times as you like. Put each Evolution card removed this way into your hand.",
				fr: "Faites dés-évoluer autant de vos Pokémon de Banc autant de fois que vous voulez. Placez chaque carte Évolution retirée de cette façon dans votre main.",
				es: "Involuciona tantos Pokémon de tu Banca como quieras tantas veces como desees. Pon cada carta de Evolución eliminada de esta manera en tu mano.",
				it: "Annulla a piacimento l'evoluzione dei tuoi Pokémon in panchina. Aggiungi le carte Evoluzione rimosse in questo modo a quelle che hai in mano.",
				pt: "Reverta os Pokémon no Banco tantas vezes quanto quiser. Coloque cada card de Evolução removido desta maneira na sua mão.",
				de: "Rückentwickle beliebig viele Pokémon auf deiner Bank, sooft du möchtest. Nimm jede auf diese Weise entfernte Evolutionskarte auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dazzle Blast",
				fr: "Explosion de Lumière",
				es: "Destello Deslumbrante",
				it: "Accecobomba",
				pt: "Explosão Fascinante",
				de: "Blendende Explosion"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 50,

		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	abilities: [{
		type: "Ability",

		name: {
			en: "{title}:",
			fr: "{title}:",
			es: "{title}:",
			it: "{title}:",
			pt: "{title}:",
			de: "{title}:"
		},

		effect: {
			en: "{title}: Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			fr: "{title}: Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			es: "{title}: Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			it: "{title}: Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			pt: "{title}: Impede todos os efeitos das Habilidades causadas neste Pokémon pelo Pokémon do seu oponente.",
			de: "{title}: Verhindere alle Effekte von Fähigkeiten gegnerischer Pokémon, die diesem Pokémon zugefügt werden."
		}
	}],

	thirdParty: {
		cardmarket: 284247
	}
}

export default card
