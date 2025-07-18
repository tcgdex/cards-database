import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Ampharos",
         ja: "アンファロス",
         fr: "Ampharos",
         de: "Ampharos",
         es: "Ámpharos",
         it: "Ampharos",
         pt: "Ampharos",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [181],
      hp: 120,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Energy Connect",
            ja: "エネルギー接続",
            fr: "Energy Connect",
            de: "Energieverbindung",
            es: "Energy Connect",
            it: "Connessione energetica",
            pt: "Energy Connect",
          },
          effect: {
            en: "As often as you like during your turn (before your attack), you may move a basic Energy card attached to 1 of your Benched PokÃ©mon to your Active PokÃ©mon. This power can't be used if Ampharos is affected by a Special Condition.",
            ja: "ターン中（攻撃前）に好きなように、ベンチのポカモンの1つに取り付けられた基本的なエネルギーカードをアクティブなポカモンに移動することができます。 Ampharosが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez déplacer une carte d'énergie de base attachée à 1 de votre poké banc à votre poké actif. Cette puissance ne peut pas être utilisée si les ampharos sont affectés par une condition spéciale.",
            de: "So oft Sie während Ihres Zuges (vor Ihrem Angriff) mögen, können Sie eine grundlegende Energiekarte an 1 Ihres Bank -Poké -Mons zu Ihrem aktiven Poké Mon verschieben. Diese Leistung kann nicht verwendet werden, wenn Ampharos von einem besonderen Zustand beeinflusst werden.",
            es: "Tan a menudo como desee durante su turno (antes de su ataque), puede mover una tarjeta de energía básica unida a 1 de su banca Poké Mon a su Poké Mon activo. Esta potencia no se puede usar si Ampharos se ve afectado por una condición especial.",
            it: "Tutte le volte che vuoi durante il tuo turno (prima del tuo attacco), puoi spostare una carta di energia di base collegata a 1 del tuo poké in panchina al tuo poké attivo. Questa potenza non può essere utilizzata se Ampharos è influenzato da una condizione speciale.",
            pt: "Sempre que quiser durante o seu turno (antes do seu ataque), você pode mover um cartão de energia básico anexado a 1 do seu Poké de bancada para o seu Poké de Mon ativo. Esse poder não pode ser usado se os Ampharos forem afetados por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Miraculous Thunder",
            ja: "奇跡的な雷",
            fr: "Thunder miraculeux",
            de: "Wundersamer Donner",
            es: "Trueno milagroso",
            it: "Tuono miracoloso",
            pt: "Trovão milagroso",
          },
          effect: {
            en: "You may discard all Lightning Energy attached to Ampharos. If you do, the Defending Pokemon is now Burned and Confused.",
            ja: "Ampharosに取り付けられたすべての稲妻エネルギーを捨てることができます。もしそうなら、防御するポケモンは今や燃やされ、混乱しています。",
            fr: "Vous pouvez jeter toute l'énergie de la foudre attachée aux ampharos. Si vous le faites, le Pokémon en défense est maintenant brûlé et confus.",
            de: "Sie können alle Blitzergie an Ampharos verwerfen. Wenn Sie dies tun, ist das verteidigende Pokemon jetzt verbrannt und verwirrt.",
            es: "Puede descartar toda la energía del rayo unida a Ampharos. Si lo haces, el Pokémon defensor ahora está quemado y confundido.",
            it: "Puoi scartare tutta l'energia di fulmini attaccata agli anfAROS. Se lo fai, il Pokemon in carica viene ora bruciato e confuso.",
            pt: "Você pode descartar toda a energia de raios ligada aos ânpharos. Se o fizer, o pokemon atual está queimado e confuso.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
