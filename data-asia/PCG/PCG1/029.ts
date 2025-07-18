import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Dewgong",
         ja: "デューゴン",
         fr: "Dewgong",
         de: "Dewgong",
         es: "Rocío",
         it: "Dewgong",
         pt: "Orvalho",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [87],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Safeguard",
            ja: "保護",
            fr: "Sauvegarde",
            de: "Sichern",
            es: "Salvaguardia",
            it: "Salvaguardia",
            pt: "Salvaguarda",
          },
          effect: {
            en: "Prevent all effects of attacks, including damage, done to Dewgong by your opponent's PokÃ©mon-ex.",
            ja: "対戦相手のPokã©Mon-ExによってDewgongに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, y compris les dégâts, causés à Dewgong par le pokã © Mon-EX de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die Dewgong durch den Poké-Mon-EX Ihres Gegners angerichtet haben.",
            es: "Evite todos los efectos de los ataques, incluido el daño, realizado a Dewgong por el Poké de su oponente Mon-Ex.",
            it: "Prevenire tutti gli effetti degli attacchi, incluso il danno, fatto a Dewgong da parte del poké del tuo avversario.",
            pt: "Evite todos os efeitos dos ataques, incluindo danos, causados ao orvalho pelo Poké Mon-Ex do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Cold Breath",
            ja: "コールドブレス",
            fr: "Souffle froid",
            de: "Kaltem Atem",
            es: "Respiración fría",
            it: "Bispio freddo",
            pt: "Respiração fria",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Aurora Beam",
            ja: "オーロラビーム",
            fr: "Faisceau auroré",
            de: "Aurora Strahl",
            es: "Haz de aurora",
            it: "Raggio di aurora",
            pt: "Feixe de aurora",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
