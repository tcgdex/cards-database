import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Aerodactyl",
         ja: "アエロダクチル",
         fr: "Aérodactyle",
         de: "Aerodactyl",
         es: "Aerodactil",
         it: "Aerodattilo",
         pt: "Aerodactyl",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [142],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Ancient Wind",
            ja: "古代の風",
            fr: "Vent ancien",
            de: "Alter Wind",
            es: "Viento antiguo",
            it: "Antico vento",
            pt: "Vento antigo",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Aerodactyl is your Active Pokmon, you may ignore all Pok-Bodies until the end of your turn. This power can't be used if Aerodactyl is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）</em> </em>、Aerodactylがアクティブなポクモンである場合、ターンの終わりまですべてのポックボディを無視することができます。アエロダクチルが特別な状態の影響を受けている場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si l'aérodactyle est votre pokmon actif, vous pouvez ignorer tous les corps POK jusqu'à la fin de votre tour. Cette puissance ne peut pas être utilisée si l'aérodactyle est affectée par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Aerodactyl Ihr aktives Pokmon ist, können Sie alle Pok-Körper bis zum Ende Ihres Zuges ignorieren. Diese Leistung kann nicht angewendet werden, wenn Aerodactyl durch einen besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si aerodactyl es su Pokmon activo, puede ignorar todos los cuerpos POK hasta el final de su turno. Esta potencia no se puede usar si el aerodactilo se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se aerodattil è il tuo Pokmon attivo, puoi ignorare tutti i bodie Pok fino alla fine del tuo turno. Questa potenza non può essere utilizzata se l'aerodattilo è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se o aerodactyl for o seu Pokmon ativo, você poderá ignorar todos os corpos POK até o final do seu turno. Esse poder não pode ser usado se o aerodactyl for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Rising Lunge",
            ja: "上昇する突進",
            fr: "Fente croissante",
            de: "Steigender Longe",
            es: "Estocada",
            it: "Affondo in aumento",
            pt: "Rising Bunge",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 1,

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
