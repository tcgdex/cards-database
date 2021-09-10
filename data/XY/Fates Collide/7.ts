import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Serperior",
		fr: "Majaspic",
		es: "Serperior",
		it: "Serperior",
		pt: "Serperior",
		de: "Serpiroyal"
	},
	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		497,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Coil",
				fr: "Enroulement",
				es: "Enrosque",
				it: "Arrotola",
				pt: "Enroscar",
				de: "Einrollen"
			},
			effect: {
				en: "During your next turn, this Pokémon’s attacks do 60 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 60 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, los ataques de este Pokémon hacen 60 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 60 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Durante sua próxima vez de jogar, os ataques deste Pokémon causarão 60 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügen die Angriffe dieses Pokémon dem Aktiven Pokémon deines Gegners 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
				es: "Golpe Cuchillazo",
				it: "Lacerattacco",
				pt: "Ataque Cortante",
				de: "Schlitzender Schlag"
			},
			effect: {
				en: "This Pokémon can’t use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Golpe Cuchillazo durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
				pt: "Este Pokémon não poderá usar o Ataque Cortante na sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Schlitzender Schlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
