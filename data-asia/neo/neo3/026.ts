import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Lanturn",
         ja: "ラントン",
         fr: "Chanteur",
         de: "Lanturn",
         es: "Lanturn",
         it: "Lanturn",
         pt: "Lanturn",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [171],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Submerge",
            ja: "水没",
            fr: "Submerger",
            de: "Tauchen",
            es: "Sumergir",
            it: "Immergere",
            pt: "Submergir",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may change Lanturn's type to Water until the end of your turn. This power can't be used if Lanturn is Asleep, Confused, or Paralyzed. If Lanturn becomes Asleep, Confused, or Paralyzed after you have used this power, its type changes back to Lightning.",
            ja: "ターン中に（攻撃の前）</em> </em>、ターンの終わりまでLanturnのタイプを水に変更することができます。 Lanturnが眠ったり、混乱したり、麻痺している場合、この力は使用できません。このパワーを使用した後にラントンが眠り、混乱し、麻痺した場合、そのタイプは稲妻に戻ります。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez changer le type de Lanturn en eau jusqu'à la fin de votre tour. Ce pouvoir ne peut pas être utilisé si Lanturn est endormi, confus ou paralysé. Si Lanturn s'endorme, confus ou paralysé après avoir utilisé ce pouvoir, son type revient à la foudre.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie Lanturns Typ bis zum Ende Ihres Zuges in Wasser ändern. Diese Kraft kann nicht verwendet werden, wenn Lanturn schläft, verwirrt oder gelähmt ist. Wenn Lanturn nach dem Einsatz dieser Kraft einschläft, verwirrt oder gelähmt ist, wechselt der Typ wieder zum Blitz.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede cambiar el tipo de Lanturn a agua hasta el final de su turno. Este poder no se puede usar si Lanturn está dormido, confundido o paralizado. Si Lanturn se queda dormido, confundido o paralizado después de haber usado este poder, su tipo vuelve a cambiar a Lightning.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi cambiare il tipo di Lanturn in annaffiatura fino alla fine del tuo turno. Questo potere non può essere usato se Lanturn è addormentato, confuso o paralizzato. Se Lantu",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode alterar o tipo de Lanturn para água até o final do seu turno. Esse poder não pode ser usado se Lanturn estiver dormindo, confuso ou paralisado. Se Lanturn ficar dormindo, confuso ou paralisado depois que você usou esse poder, seu tipo muda de volta ao raio.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Blinding Light",
            ja: "盲目の光",
            fr: "Lumière aveuglante",
            de: "Blindlicht",
            es: "Luz cegadora",
            it: "Luce accecante",
            pt: "Luz ofuscante",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
