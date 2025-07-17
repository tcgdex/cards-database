import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Cacnea",
         ja: "カクネア",
         fr: "Cacnée",
         de: "Kaknoe",
         es: "Cacnea",
         it: "Cacnea",
         pt: "Cacnea",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [331],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Poison Payback",
            ja: "ポイズンの見返り",
            fr: "Retour sur poison",
            de: "Giftrückzahlung",
            es: "Reverencia de veneno",
            it: "Rimborso veleno",
            pt: "Payback de veneno",
          },
          effect: {
            en: "If Cacnea is your Active Pokémon and is damaged by an opponent's attack <em>(even if Cacnea is Knocked Out)</em>, the Attacking Pokémon is now Poisoned.",
            ja: "カクネアがあなたのアクティブなポケモンであり、相手の攻撃<em>によって損傷している場合（カクネアがノックアウトされたとしても）</em>、攻撃するポケモンが毒されるようになりました。",
            fr: "Si la cacnée est votre Pokémon actif et est endommagé par l'attaque d'un adversaire <em> (même si la cacnée est éliminée) </em>, le Pokémon attaquant est maintenant empoisonné.",
            de: "Wenn Kaknoe Ihr aktives Pokémon ist und durch den Angriff eines Gegners (auch wenn Kaknoe ausgeschlagen wird) </em> beschädigt wird, wird das angreifende Pokémon jetzt vergiftet.",
            es: "Si Cacnea es tu Pokémon activo y está dañado por el ataque de un oponente <em> (incluso si Cacnea es noqueada) </em>, el Pokémon atacante ahora está envenenado.",
            it: "Se Cacnea è il tuo Pokémon attivo ed è danneggiata dall'attacco di un avversario <em> (anche se la cacnea viene eliminata) </em>, il Pokémon attaccante è ora avvelenato.",
            pt: "Se a cacnea é o seu Pokémon ativo e é danificada pelo ataque de um oponente <em> (mesmo que a cacnea seja nocauteada) </em>, o Pokémon de ataque agora está envenenado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Light Punch",
            ja: "軽いパンチ",
            fr: "Coup de poing",
            de: "Leichter Schlag",
            es: "Ligero",
            it: "Punch leggero",
            pt: "Punchado leve",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
