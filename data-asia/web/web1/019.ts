import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Venomoth",
         ja: "venomoth",
         fr: "Venomoth",
         de: "Venomoth",
         es: "Veneno",
         it: "Venomoth",
         pt: "Venomoth",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [49],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Stir Up Twister",
            ja: "ツイスターをかき混ぜます",
            fr: "Twister Twister",
            de: "Twister aufrühren",
            es: "Rebole tortuga",
            it: "Mescola Twister",
            pt: "Mexa o Twister",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon. Then, switch your Active Pokemon with 1 of your Benched Pokemon. (Do the damage before switching the Pokemon.)",
            ja: "対戦相手は、ディフェンディングポケモンを1匹のベンチポケモンで切り替えます。次に、ベンチ付きポケモン1枚でアクティブなポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon bancté. Ensuite, changez votre Pokémon actif avec 1 de votre Pokémon banc. (Faites les dégâts avant de changer le pokemon.)",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokémon. Wechseln Sie dann Ihr aktives Pokémon mit 1 Ihres Bankpokémons. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca. Luego, cambie su Pokémon activo con 1 de su Pokémon de banca. (Haz el daño antes de cambiar el Pokémon).",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina. Quindi, cambia il tuo Pokemon attivo con 1 del tuo Pokemon in panchina. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco. Em seguida, mude seu Pokémon ativo com 1 do seu Pokémon em banco. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Rainbow Powder",
            ja: "レインボーパウダー",
            fr: "Arc-en-ciel",
            de: "Regenbogenpulver",
            es: "Polvo de arcoiris",
            it: "Polvere arcobaleno",
            pt: "Arco -íris em pó",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御ポケモンは現在毒されます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si la queue, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si Tails, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se le code, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se o cauda, o pokemon defensor agora está envenenado.",
          },
          damage: 20,
        },
      ],

      retreat: 0,

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
