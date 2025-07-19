import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Pelipper (Delta Species)",
         ja: "ペリッパー（デルタ種）",
         fr: "Pelipper (espèces delta)",
         de: "Pelipper (Delta -Arten)",
         es: "Pelipper (especie delta)",
         it: "Pelipper (Delta Species)",
         pt: "Pelipper (espécies Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [279],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Delta Transport",
            ja: "デルタ輸送",
            fr: "Transport delta",
            de: "Delta -Transport",
            es: "Transporte delta",
            it: "Trasporto delta",
            pt: "Delta Transporte",
          },
          effect: {
            en: "Once during your turn (before your attack), if Pelipper is on your Bench, you may switch 1 of your Active PokÃ©mon that has  on its card with 1 of your Benched PokÃ©mon.",
            ja: "ターン中（攻撃の前）に、ペリッパーがベンチにある場合、1枚のベンチポカモンでカードにあるアクティブなポカモンの1つを切り替えることができます。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Pelipper est sur votre banc, vous pouvez changer 1 de votre poké actif qui a sur sa carte avec 1 de votre pokã © Mon.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff), wenn sich Pelipper auf Ihrer Bank befindet, können Sie 1 Ihres aktiven Poké Mons wechseln, das mit 1 Ihrer Bank -Poké Mons auf der Karte auf der Karte enthält.",
            es: "Una vez durante su turno (antes de su ataque), si Pelipper está en su banco, puede cambiar 1 de su Poké Mon activo que tiene en su tarjeta con 1 de su banca Poké Mon.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se Pelipper è in panchina, puoi cambiare 1 del tuo poké attivo che ha sulla sua carta con 1 del tuo poké mon.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o Pelipper estiver em seu banco, você poderá alternar 1 do seu Poké Mon ativo que possui em seu cartão com 1 do seu Poké Mon em bancada.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Supersonic",
            ja: "超音速",
            fr: "Supersonique",
            de: "Überschall",
            es: "Supersónico",
            it: "Supersonico",
            pt: "Supersônico",
          },
          effect: {
            en: "The Defending Pokemon is now Confused.",
            ja: "防御ポケモンは今混乱しています。",
            fr: "Le Pokémon en défense est maintenant confus.",
            de: "Das verteidigende Pokemon ist jetzt verwirrt.",
            es: "El Pokémon defensor ahora está confundido.",
            it: "Il Pokemon in carica è ora confuso.",
            pt: "O Pokemon atual agora está confuso.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
